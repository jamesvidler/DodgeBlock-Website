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
                            Coming soon...
                        </h1>

                        <h1 class="title">
                            An endless runner, re-imagined in VR.
                        </h1>
                        <h2 class="subtitle">
                            No two runs are ever the same. How long can you last?
                        </h2>
                        <p>&nbsp;</p>
                        <div class="box">
                            Plaforms: Oculus Go, Rift (future)
                        </div>
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
