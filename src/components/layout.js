import React from "react"
import { graphql, StaticQuery } from 'gatsby'
import "../sass/global.scss"
import BackgroundImage from 'gatsby-background-image'

const Layout = ({ children }) => (
  <StaticQuery
      query={graphql`
        query {
          desktop: file(relativePath: { eq: "cube-field-web.png" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
      render={data => {
        // Set ImageData.
        const imageData = data.desktop.childImageSharp.fluid
        return (
          <BackgroundImage
            Tag="div"
            className="App"
            fluid={imageData}
            backgroundColor={`#040e18`}
          >
            <section className="hero is-fullheight">
                <div className="hero-head">
                <h1 className="title pageTitle">Dodgeblock VR</h1>
                </div>

                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="main-column column is-two-thirds">
                        {children}
                        </div>
                    </div>
                </div>

                <div className="hero-foot">
                <p className="">Produced by Vidler Studios, &copy; 2019</p>
                </div>

            </section>
          </BackgroundImage>
        )
      }}
    />

)

export default Layout
