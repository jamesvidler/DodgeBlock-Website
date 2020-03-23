/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { React } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Leaderboard = () => {
    const data = useStaticQuery(graphql`
    query MyQuery {
        allOculusLeaderboardEntry(limit: 10) {
          nodes {
            user {
              id
              alias
              profileImg {
                childImageSharp {
                  fixed(quality: 90, width: 60, height: 60) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
            score
            rank
          }
        }
        file(relativePath: { eq: "no-profile-pic.png" }) {
            childImageSharp {
              fixed(quality: 90, width: 60, height: 60) {
                ...GatsbyImageSharpFixed
              }
            }
          }
      }
      
  `)
  
    return (
        <div>
            <Styled.h2>Top 10 Leaderboard</Styled.h2>
            <div sx={{
                width: [`100%`, `100%`, `80%`, `80%`],
                display: `grid`,
                gridGap: [2, 2, 2, 2],
                gridTemplateColumns: [`1fr`, `1fr`, `1fr`, `repeat(2, 1fr)`],
                h2: { gridColumn: `-1/1`, color: `white !important` },
                marginTop: `40px`,
                marginLeft: `auto`,
                marginRight: `auto`
            }}>
                <LeaderboardEntries entries={data.allOculusLeaderboardEntry.nodes} no_profile_pic={data.file} />
            </div>
            
        </div>
    );
}

const LeaderboardEntries = ({entries, no_profile_pic}) => {
    
    return entries.map(entry => {
        return (
            <LeaderboardEntry key={entry.id} no_profile_pic={no_profile_pic} {...entry} />
        )
    })
}

const LeaderboardEntry = ({ id, score, rank, user, no_profile_pic }) => {

    let profileImg = no_profile_pic.childImageSharp;
    if(user.profileImg) {
        profileImg = user.profileImg.childImageSharp;
    }

    let bg = `#0000008a`;
    let icon = null;


    if(rank === 1) {
        bg = `linear-gradient(to right,#bd9710 0%,#000000 100%)`;
        icon = `🥇 `
    }

    if(rank === 2) {
        bg = `linear-gradient(to right,#9a9a9a 0%,#000000 100%)`;
        icon = `🥈 `
    }

    if(rank === 3) {
        bg = `linear-gradient(to right,#bd6f10 0%,#000000 100%)`;
        icon = `🥉 `
    }



    return(
        <div sx={{
            width: `100%`,
            boxShadow: `lg`,
            position: `relative`,
            textDecoration: `none`,
            borderRadius: `lg`,
            px: 4,
            py: [2, 3],
            color: `white`,
            background: bg,
            transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
            position: `relative`,
            "&:hover": {
              color: `white !important`,
              transform: `translateY(-5px)`,
              boxShadow: `xl`,
            },
          }}>

            <span sx={{
                display: `inline-block`,
                width: `65px`,
                fontWeight: `bold`,
                fontSize: `36px`,
                lineHeight: `60px`,
                position: `relative`
            }}>#{rank}</span>

            

            <span sx={{
                //fontFamily: `Bungee Outline`,
                color: `cyan`,
                display: 'inline-block',
                color: `#fbff00`,
                fontSize: `36px`,
                fontWeight: `bold`,
                marginLeft: `16px`
            }}>{score}</span>

            <div>
                <Img sx={{ 
                    borderRadius: `200px`,
                    display: `inline-block`,
                    boxShadow: `0px 2px 4px #333`
                    }} 
                fixed={profileImg.fixed} alt={user.alias} />
                <span sx={{
                    marginLeft: `20px`,
                    fontSize: `20px`,
                    position: `relative`,
                    top: `-22px`
                }}>
                    {icon && 
                        icon
                    }
                    {user.alias}
                </span>
            </div>
            
            
        </div>
    )
}

export default Leaderboard;