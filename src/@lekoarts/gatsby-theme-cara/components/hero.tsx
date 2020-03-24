/** @jsx jsx */
import React, { useState} from 'react'
import { jsx, Styled } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"

import '../../../../node_modules/react-modal-video/css/modal-video.min.css';
import '../../..//css/react-video-modal.overrides.css';

import ModalVideo from 'react-modal-video'
import OculusImage from "../../../components/oculusImage"

// @ts-ignore
import Intro from "../sections/intro"

const Hero = ({ offset, factor = 1 }: { offset: number; factor?: number }) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
  <div>
    <Divider speed={0.2} offset={offset} factor={factor}>
      <UpDown>
        {/* <SVG icon="box" hiddenMobile width={48} stroke color="icon_orange" left="10%" top="20%" /> */}

        <SVG icon="cube" hiddenMobile width={24} color="icon_darkest" left="10%" top="20%" />
        {/* <SVG icon="box" width={48} stroke color="icon_red" left="60%" top="70%" /> */}
        <SVG icon="cube" hiddenMobile width={48} color="" left="60%" top="80%" />
        <SVG icon="cube" hiddenMobile width={48} color="icon_darkest" left="60%" top="68%" />
        <SVG icon="cube" hiddenMobile width={48} color="icon_darkest" left="66.66%" top="86%" />
        
        
        {/* <img src="iconmonstr-cube-1-240 (1).png" alt="test" /> */}
        {/* <SVG icon="box" width={6} color="icon_darker" left="60%" top="15%" /> */}
        <SVG icon="cube" width={6} color="icon_darkest" left="60%" top="15%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="cube" hiddenMobile width={16} color="icon_blue" left="80%" top="10%" />
        <SVG icon="cube" width={12} stroke color="icon_brightest" left="90%" top="50%" />
        <SVG icon="circle" hiddenMobile width={16} color="icon_yellow" left="70%" top="90%" />
        <SVG icon="cube" width={16} stroke color="icon_darkest" left="30%" top="65%" />
        <SVG icon="cube"  hiddenMobile width={16} stroke color="icon_pink" left="28%" top="15%" />
        <SVG icon="circle" width={6} color="icon_yellow" left="75%" top="10%" />
        <SVG icon="cube"  width={8} color="icon_darkest" left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="circle" hiddenMobile width={24} color="icon_yellow" left="5%" top="70%" />
      <SVG icon="circle" width={6} color="icon_yellow" left="4%" top="20%" />
      <SVG icon="circle" width={12} color="icon_yellow" left="50%" top="60%" />
      <SVG icon="cube" width={8} color="icon_darkest" left="95%" top="91%" />
      <SVG icon="cube" width={8} color="icon_darkest" left="95%" top="90%" />
      
      <SVG icon="cube" hiddenMobile width={24} color="icon_darker" left="40%" top="80%" />
      <SVG icon="cube" width={8} stroke color="icon_darker" left="25%" top="5%" />
      <SVG icon="circle"  width={64} color="icon_yellow" left="95%" top="5%" />
      <SVG icon="cube" hiddenMobile width={64} color="icon_purple" left="5%" top="90%" />
      <SVG icon="cube" width={6} color="icon_darkest" left="10%" top="10%" />
      <SVG icon="cube" width={6} color="icon_darkest" left="12%" top="10%" />
      <SVG icon="cube" hiddenMobile width={12} color="icon_darkest" left="40%" top="30%" />
      {/* <SVG icon="cube" width={16} stroke color="icon_darker" left="10%" top="50%" /> */}
      <SVG icon="cube" width={8} stroke color="icon_darker" left="80%" top="70%" />
    </Divider>
    <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={offset} factor={factor}>
      <Inner sx={{textAlign:`center`}}>
        
        <Styled.h1>
        Dodge Block
        </Styled.h1>
        <Styled.p sx={{fontStyle: `italic`, marginBlockEnd: `8px`}}>
          "One of the <strong>all-time</strong>, great (VR) games to lose yourself in..." 💬
        </Styled.p>
        <div sx={{marginBottom: `22px`}}>⭐⭐⭐⭐⭐ - newellrine</div>


      
        <div sx={{paddingTop: `1rem`}}>
          <a sx={{ 
            variant: `anchors.btn`,
            backgroundColor: `#c14300`,
            display: [`block`, `block`, `inline`]
             }} href="javascript:;" onClick={() => setIsOpen(true)}>📽 Watch Trailer</a>
          <a sx={{ 
            variant: `anchors.btn`,
            display: [`block`, `block`, `inline`]
             }} href="https://www.oculus.com/experiences/go/2276532692364976">🕹 Play on <OculusImage /> </a>
        </div>
        
        <ModalVideo channel='youtube' isOpen={isOpen} videoId='53nHYq0w4Kc' onClose={() => setIsOpen(false)} />
      </Inner>
    </Content>
  </div>
)}

export default Hero