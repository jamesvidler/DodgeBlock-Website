/** @jsx jsx */
import { Footer as ThemeFooter, Styled, Flex, useColorMode, jsx } from "theme-ui"
import OculusImage from "../../../components/oculusImage"


const Footer = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    setColorMode(`dark`)
  }

  return (
    <ThemeFooter>
      <OculusImage />
      <div>
        Copyright &copy; {new Date().getFullYear()}. All rights reserved. <br/> 
        <a href='/privacy-policy.html'>Privacy Policy</a>
      </div>
      <br />
    </ThemeFooter>
  )
}

export default Footer