import { graphql, useStaticQuery } from "gatsby"

const useBGImage = () => {
  const data = useStaticQuery(graphql`
  query {
    desktop: file(relativePath: { eq: "cube-field-web.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`)

  return data.desktop.childImageSharp.fluid
}

export default useBGImage