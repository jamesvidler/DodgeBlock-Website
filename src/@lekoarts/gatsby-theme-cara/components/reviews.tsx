/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import ProjectsMDX from "../sections/projects"
import useScreenshot from '../hooks/use-screenshot'
import Img from 'gatsby-image'

const Reviews = ({ offset, factor = 2 }: { offset: number; factor?: number }) => {

  return (
    <div>
      <Divider
        bg="#1f7f80"
        sx={{ clipPath: `polygon(0 16%, 100% 4%, 100% 82%, 0 94%)` }}
        speed={-0.2}
        offset={offset}
        factor={factor}
      />
      <Content speed={0.4} offset={offset + 0.2} factor={factor}>
        <Inner>
          

          <div>
            <Styled.h2 sx={{marginBottom: `30px`}}>
              What People are Saying
            </Styled.h2>

             
          <div
            sx={{
              display: `grid`,
              gridGap: [4, 4, 4, 5],
              gridTemplateColumns: [`1fr`, `1fr`, `repeat(2, 1fr)`],
              h2: { gridColumn: `-1/1`, color: `white !important` },
              ".card": {
                boxShadow: `lg`,
                position: `relative`,
                textDecoration: `none`,
                borderRadius: `lg`,
                px: 4,
                py: [2, 3],
                color: `white`,
                background: `#160d2d`,
                transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
                "&:hover": {
                  color: `white !important`,
                  transform: `translateY(-5px)`,
                  boxShadow: `xl`,
                }         
              }
            }}
          >
            <div className="card">
              <Styled.p>
                ⭐⭐⭐⭐⭐ <br/> Gannan
              </Styled.p>
              <Styled.p>
                💬 <i>"It has become one of my favorites in a very short time! It's a great game, the mechanics are great, and the immersion is fantastic!"</i>
              </Styled.p>
              
            </div>

            <div className="card">
              <Styled.p>
                ⭐⭐⭐⭐⭐ <br/> Colonel_Izzi
              </Styled.p>
              <Styled.p>
              💬 <i>"A legitimate retro-scifi-gaming vibe... I feel like I've got my money's worth many times over."</i> 
              </Styled.p>
            </div>

            <div className="card">
              <Styled.p>
                  ⭐⭐⭐⭐⭐ <br/> bryan.cao
              </Styled.p>
              <Styled.p>
              💬 <i>"I like this game a lot! You really get a smooth sense of speed, very satisfying"</i>
              </Styled.p>
            </div>

            <div className="card">
              <Styled.p>
                  ⭐⭐⭐⭐⭐ <br/> newellrine
              </Styled.p>
              <Styled.p>
              💬 <i>"One of the great <b>In the zone</b> Go games"</i>
              </Styled.p>
            </div>
          </div>
           

          </div>

        </Inner>
      </Content>
      <Divider speed={0.1} offset={offset} factor={factor}>
        <UpDown>
          <SVG icon="cube" width={6} color="icon_brightest" left="85%" top="75%" />
          <SVG icon="cube" width={8} color="icon_teal" left="70%" top="20%" />
          <SVG icon="cube" width={8} stroke color="icon_orange" left="25%" top="5%" />
          <SVG icon="circle" hiddenMobile width={24} color="icon_yellow" left="17%" top="60%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="cube" hiddenMobile width={16} color="icon_green" left="20%" top="90%" />
          <SVG icon="cube" width={12} stroke color="icon_brightest" left="90%" top="30%" />
          <SVG icon="circle" width={16} color="icon_yellow" left="70%" top="90%" />
          <SVG icon="cube" hiddenMobile width={16} stroke color="icon_teal" left="18%" top="75%" />
          <SVG icon="circle" width={6} color="icon_yellow" left="75%" top="10%" />
          <SVG icon="cube" hiddenMobile width={8} color="icon_green" left="45%" top="10%" />
        </UpDownWide>
        <SVG icon="circle" hiddenMobile width={6} color="icon_yellow" left="4%" top="20%" />
        <SVG icon="circle" width={12} color="icon_yellow" left="80%" top="60%" />
        <SVG icon="cube" width={6} color="icon_orange" left="10%" top="10%" />
        <SVG icon="cube" width={12} color="icon_yellow" left="29%" top="26%" />
        <SVG icon="cube" width={16} stroke color="icon_red" left="75%" top="30%" />
        <SVG icon="cube" width={8} stroke color="icon_yellow" left="80%" top="70%" />
      </Divider>
    </div>
)}

export default Reviews