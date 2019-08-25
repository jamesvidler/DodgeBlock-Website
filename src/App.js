import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './sass/mystyles.scss'
import YouTube from 'react-youtube'

class App extends Component {
  render() {
    const opts = {
        height: '390',
        width: '640',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 0
        }
      };

    return (
      <div className="App">
        <section class="hero is-fullheight">
            <div class="hero-head">
              <h1 className="title pageTitle">Dodgeblock VR</h1>
            </div>

            <div class="hero-body">
                <div class="container has-text-centered">
                    <div class="main-column column is-two-thirds">
                    
                        <div className="youtube-container">
                            <div className="youtube">
                                <YouTube
                                    videoId="TjfY_cBc8DI"
                                    opts={opts}
                                    onReady={this._onReady}
                                />
                            </div>
                        </div>

                        <h1 class="title">
                            Available Now <br/> for the Oculus Go
                        </h1>

                        <h1 class="title">
                            An endless runner, re-imagined in VR.
                        </h1>
                        <h2 class="subtitle">
                            No two runs are ever the same. How long can you last?
                        </h2>
                        <p>&nbsp;</p>
                        <p><a class="button is-warning is-large" href="https://www.oculus.com/experiences/go/2276532692364976" target="_blank" title="Follow">Play Now</a></p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p><a class="button is-info" href="https://www.reddit.com/r/DodgeblockVR/" target="_blank" title="Follow">Join the Discussion on Reddit</a></p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        
                        <h2 class="subtitle">
                            Platforms:
                        </h2>
                        <img className="oculus-logo" src="\img\logo_oculus_go_wordmark-1.png" />

                        
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p><a class="button is-primary" href="https://forms.office.com/Pages/ResponsePage.aspx?id=YpW2sDEzL0OUhERV1gX7c1ydkbxQFU9PrWOu7c3jAB1UQkRLS0NCVE9JREQxODBGWDlNNUlPSEtGNC4u" target="_blank" title="Contact Us">Contact the Developer</a></p>

                    </div>
                </div>
            </div>

            <div class="hero-foot">
              <p className="">Produced by Vidler Studios, &copy; 2019</p>
            </div>

        </section>
      </div>
    );
  }
}

export default App;
