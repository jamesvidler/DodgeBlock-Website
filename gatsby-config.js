require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Dodgeblock - An Endless Runner, Re-imagined for VR`,
    description: `Fly through a retro-inspired void while dodging endless obstacles.
    This is a trippy and challenging endless runner/flyer, inspired by classic arcade games and re-imagined for VR using procedural generation. Dodge the blocks and fly through the rings to extend your time. No two runs are ever the same. How long can you last?`,
    author: `@jameskvidler`,
    image: `https://dodgeblockvr.com/images/logo.png`
  },
  plugins: [
    {
      resolve: `gatsby-source-oculus-leaderboards`,
      options: {
        oculus_appId: process.env.OCULUS_APPID,
        oculus_appSecret: process.env.OCULUS_APPSECRET,
        oculus_leaderboard: `Highest_Score`,
        limit: 10 //optional
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
