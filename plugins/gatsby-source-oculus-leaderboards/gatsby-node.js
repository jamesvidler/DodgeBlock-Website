const axios = require('axios');
const { createRemoteFileNode } = require("gatsby-source-filesystem")

let sourceCount = 0;
let oculus_appId = null;
let oculus_appSecret = null;
let oculus_leaderboard = null;
let limit = null;

exports.sourceNodes = async (args, configOptions) => {
    const { actions, createNodeId, createContentDigest } = args;
    const { createNode } = actions;

    //reset result count to ;0;
    sourceCount = 0;

    oculus_appId = configOptions.oculus_appId;
    oculus_appSecret = configOptions.oculus_appSecret;
    oculus_leaderboard = configOptions.oculus_leaderboard;
    
    //see if we have a limit and should only get 'X' amount...
    if(configOptions.limit && parseInt(configOptions.limit) > 0) {
        limit = parseInt(configOptions.limit);
    }

    if(!limit) {
        console.warn(`Getting ALL leaderboard entries for '${oculus_leaderboard}', do you need all of them? Consider using the 'limit' config parameter to only get top 'X' scores...`);
    } else {
        console.log(`Getting top ${limit} entries for leaderboard '${oculus_leaderboard}'...`)
    }

    await sourcePagedEntries({ createNode, createContentDigest, createNodeId });

    console.log(`Nodes created for ${sourceCount} leaderboard entries.`)
}

const sourcePagedEntries = async ({ nextPageCursor, createNode, createContentDigest, createNodeId }) => {

    let exit = false;

    if(nextPageCursor) {
        console.log(`Attempting to retrieve next page of results using cursor '${nextPageCursor}'...`)
    }
        
    const response = await axios.get('https://graph.oculus.com/leaderboard_entries', {
        headers: {
            //API access credentials, keep safe
            'Authorization': `Bearer OC|${oculus_appId}|${oculus_appSecret}`
        },
        params: {
            //the fields you want to return
            fields: `user{id, alias, profile_url}, rank, score, timestamp, extra_data_base64`,
            //the reference name of the oculus leaderboard you want to return
            api_name: oculus_leaderboard,
            //the page size
            limit: 100,
            //this will be NULL the first time, so will fetch the first page or results by default
            after: nextPageCursor
        }
    })

    const leaderboard_response = response.data;
    const entries = leaderboard_response.data;

    entries.forEach(entry => {

        if(limit && limit > 0 && sourceCount >= limit) {
            //stop inserting nodes...
            exit = true;
            return;
        } 

        const nodeContent = JSON.stringify(entry)
        const nodeMeta = {
            id: createNodeId(`entry-${entry.id}`),
            parent: null,
            children: [],
            internal: {
                type: `OculusLeaderboardEntry`,
                mediaType: `text/html`,
                content: nodeContent,
                contentDigest: createContentDigest(entry)
            }
        }

        const node = Object.assign({}, entry, nodeMeta)
        createNode(node)
        sourceCount++;
    });


    if(exit) {
        //stop getting more pages...
        return;
    }

    //keep getting the rest of the data and sourcing it until we have none left
    if(leaderboard_response.paging && leaderboard_response.paging.cursors.after) {
        await sourcePagedEntries({ nextPageCursor: leaderboard_response.paging.cursors.after, createNode, createContentDigest, createNodeId });
    }  
    
}


exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`
    type OculusLeaderboardEntry implements Node {
      user: OculusLeaderboardUser!
      rank: Int!
      score: String!
      timestamp: Int!

    }
    type OculusLeaderboardUser {
      alias: String!
      id: String!
      profile_url: String
    }
  `)
}
exports.onCreateNode = async ({
  node,
  actions: { createNode },
  store,
  cache,
  createNodeId,
}) => {
  // For all OculusLeaderboardEntry nodes that have a profile_url, call createRemoteFileNode
  if (
    node.internal.type === "OculusLeaderboardEntry" &&
    node.user.profile_url !== null
  ) {
    let fileNode = await createRemoteFileNode({
      url: node.user.profile_url, // string that points to the URL of the image
      parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
      createNode, // helper function in gatsby-node to generate the node
      createNodeId, // helper function in gatsby-node to generate the node id
      cache, // Gatsby's cache
      store, // Gatsby's redux store
    })
    // if the file was created, attach the new node to the parent node
    if (fileNode) {
      node.user.profileImg___NODE = fileNode.id
    }
  }
}