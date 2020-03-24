import { tailwind } from "@theme-ui/presets"

export default {
  ...tailwind,
  initialColorMode: `dark`,
  useCustomProperties: true,
  colors: {
    ...tailwind.colors,
    primary: tailwind.colors.orange[4],
    secondary: tailwind.colors.indigo[6],
    text: tailwind.colors.gray[3],
    heading: `#fff`,
    background: `#141821`,
    divider: tailwind.colors.gray[8],
    textMuted: tailwind.colors.gray[5],
    icon_brightest: tailwind.colors.white,
    icon_darker: tailwind.colors.gray[7],
    icon_darkest: tailwind.colors.gray[8],
    icon_red: tailwind.colors.red[6],
    icon_blue: tailwind.colors.blue[6],
    icon_orange: tailwind.colors.orange[5],
    icon_yellow: tailwind.colors.yellow[5],
    icon_pink: tailwind.colors.pink[5],
    icon_purple: tailwind.colors.purple[6],
    icon_green: tailwind.colors.green[5],
    modes: {
      light: {
        text: tailwind.colors.gray[8],
        heading: tailwind.colors.black,
        primary: tailwind.colors.orange[7],
        background: tailwind.colors.gray[1],
        divider: tailwind.colors.gray[2],
        textMuted: tailwind.colors.gray[6],
        icon_brightest: tailwind.colors.gray[2],
        icon_darker: tailwind.colors.gray[4],
        icon_darkest: tailwind.colors.gray[6],
      },
    },
  },
  breakpoints: [`400px`, `600px`, `900px`, `1200px`, `1600px`],
  sizes: {
    ...tailwind.sizes,
    "1/2": `50%`,
    "1/3": `33.333333%`,
    "2/3": `66.666667%`,
    "1/4": `25%`,
    "2/4": `50%`,
    "3/4": `75%`,
    "1/5": `20%`,
    "2/5": `40%`,
    "3/5": `60%`,
    "4/5": `80%`,
    "1/6": `16.666667%`,
    "2/6": `33.333333%`,
    "3/6": `50%`,
    "4/6": `66.666667%`,
    "5/6": `83.333333%`,
    "1/12": `8.333333%`,
    "2/12": `16.666667%`,
    "3/12": `25%`,
    "4/12": `33.333333%`,
    "5/12": `41.666667%`,
    "6/12": `50%`,
    "7/12": `58.333333%`,
    "8/12": `66.666667%`,
    "9/12": `75%`,
    "10/12": `83.333333%`,
    "11/12": `91.666667%`,
    full: `100%`,
    screen: `100vw`,
  },
  styles: {
    ...tailwind.styles,
    root: {
      ...tailwind.styles.root,
      color: `text`,
      backgroundColor: `background`,
      a: {
        transition: `all 0.3s ease-in-out`,
        "&:hover": {
          color: `primary`,
          textDecoration: `none`,
        },
      },
    },
    Footer: {
      textAlign: `center`,
      display: `block`,
      position: `absolute`,
      bottom: 0,
      color: `textMuted`,
      px: [2, 3],
      py: [3, 4],
    },
    Container: {
      maxWidth: `5xl`,
    },
    p: {
      fontSize: [1, 2],
      letterSpacing: `-0.003em`,
      lineHeight: `body`,
      "--baseline-multiplier": 0.179,
      "--x-height-multiplier": 0.35,
      color: `text`,
    },
    blockquote: {
      marginLeft: 0,
      p: {
        fontSize: [2, 3],
        fontWeight: `medium`,
        color: `heading`,
      },
    },
    h1: {
      ...tailwind.styles.h1,
      fontSize: [6, 7, 8],
      mt: 2,
      mb: 4,
      //textShadow: `rgba(255, 255, 255, 0.15) 0px 5px 35px`,
      letterSpacing: `wide`,
      color: `cyan`,
      fontFamily: `Bungee Outline,sans-serif`,
      textShadow: `#ff00b6 4px 1px 3px`,
      textAlign: `center`
    },
    h2: {
      ...tailwind.styles.h2,
      fontSize: [4, 5, 6],
      mt: 2,
      color: `heading`,
    },
    h3: {
      ...tailwind.styles.h3,
      fontSize: [3, 4, 5],
      mt: 3,
      color: `heading`,
    },
    h4: {
      ...tailwind.styles.h4,
      fontSize: [2, 3, 4],
      color: `heading`,
    },
    h5: {
      ...tailwind.styles.h5,
      fontSize: [1, 2, 3],
      color: `heading`,
    },
    h6: {
      ...tailwind.styles.h6,
      fontSize: 1,
      mb: 2,
      color: `heading`,
    }
  },
  anchors: {
    btn: {
      color: `white`,
      backgroundColor: `#5005a5`,
      textDecoration: `none`,
      padding: `12px 16px`,
      borderRadius: `12px`,
      border: `2px solid #fff`,
      margin: `1rem`,
      ":hover": {
        backgroundColor: `#280154`,
        color: `#fff!important`
      },
      ".oculus-image": {
        top: `3px`,
        left: `2px`
      }
    }
  },
  buttons: {
    primary: {
      color: `purple`
    },
    toggle: {
      color: `background`,
      border: `none`,
      backgroundColor: `text`,
      cursor: `pointer`,
      alignSelf: `center`,
      px: 3,
      py: 2,
      ml: 3,
    },
  },
  texts: {
    bigger: {
      p: {
        fontSize: [2, 3, 4],
      },
    },
  },
}