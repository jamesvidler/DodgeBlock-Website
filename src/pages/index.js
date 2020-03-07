import React, { Component } from "react"

import OculusImage from "../components/oculusImage"
import SEO from "../components/seo"
import Layout from '../components/layout'
import YouTube from 'react-youtube'


class IndexPage extends Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };
    return (
      <Layout>
        <SEO title="Home" />
        <div className="youtube-container">
          <div className="youtube">
              <YouTube
                  videoId="53nHYq0w4Kc"
                  opts={opts}
                  onReady={this._onReady}
              />
          </div>
        </div>

        <h1 className="title">
            Available Now <br/> for the Oculus Go
        </h1>

        <h1 className="title">
            An endless runner, re-imagined in VR.
        </h1>
        <h2 className="subtitle">
            No two runs are ever the same. How long can you last?
        </h2>
        <p>&nbsp;</p>
        <p><a className="button is-warning is-large" href="https://www.oculus.com/experiences/go/2276532692364976" title="Follow">Play Now</a></p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p><a className="button is-info" href="https://www.reddit.com/r/DodgeblockVR/" target="_blank" rel="noopener norefferrer" title="Follow">Join the Discussion on Reddit</a></p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>

        <h2 className="subtitle">
            Platforms:
        </h2>

          <OculusImage />

        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p><a className="button is-primary" href="https://forms.office.com/Pages/ResponsePage.aspx?id=YpW2sDEzL0OUhERV1gX7c1ydkbxQFU9PrWOu7c3jAB1UQkRLS0NCVE9JREQxODBGWDlNNUlPSEtGNC4u" target="_blank" rel="noopener norefferrer" title="Contact Us">Contact the Developer</a></p>

      </Layout>
    )
  }
  
  
}

export default IndexPage
