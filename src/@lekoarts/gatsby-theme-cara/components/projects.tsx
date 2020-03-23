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

const Projects = ({ offset, factor = 2 }: { offset: number; factor?: number }) => {
  const screenshotImg = useScreenshot();

  return (
    <div>
      <Divider
        bg="#5005a5"
        sx={{ clipPath: `polygon(0 15%, 100% 25%, 100% 85%, 0 75%)` }}
        speed={-0.2}
        offset={1.1}
        factor={factor}
      />
      <Content speed={0.4} offset={offset + 0.2} factor={factor}>
        <Inner>
          
          <div
            sx={{
              display: `grid`,
              gridGap: [4, 4, 4, 5],
              gridTemplateColumns: [`1fr`, `1fr`, `repeat(2, 1fr)`],
              h2: { gridColumn: `-1/1`, color: `white !important` },
            }}
          >
            <div>
              <Styled.h2 sx={{color: `#fff`}}>
                  About the Game
              </Styled.h2>
              
              <Styled.p>
                 Stay alive as long as you can in this transcending, VR infinite runner experience.
              </Styled.p>

              <Styled.p>
                 Dodgeblock uses <i>procedural generation</i> so no two games are ever the same!
              </Styled.p>
            </div>

            <Img sx={{ borderRadius: `9px`, boxShadow: `rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05)`}} fluid={screenshotImg} />

            <ProjectsMDX />
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

export default Projects