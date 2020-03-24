import { graphql, useStaticQuery } from "gatsby"

const useScreenshot = () => {
  const data = useStaticQuery(graphql`
  query {
    file(relativePath: { eq: "2020-screenshot-5-cropped.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`)

  return data.file.childImageSharp.fluid
}

export default useScreenshot