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
                            <p>Plaforms: Oculus Go, Rift (future)</p>
                        </div>


                        <div className="releases content">
                            <h2 class="subtitle">
                                <b>News:</b>
                            </h2>

                            <p>
                                <b>2019-02-16 [Roadmap]:</b>
                            </p>
                            <p>Thank you to all beta users who have provided feedback. I have the following updates planned in the coming weeks ;)</p>
                            <ul>
                                
                                <li>Feature: Time warp - slow time down or speed up using the Oculus Go touchpad</li>
                                <li>Feature: Online leaderboard</li>
                                <li>Feature: Toggle pointer visibility during play</li>
                                <li>Feature: Proximity points score - get more points when you get closer to objects</li>
                                <li>Improvement: Balance difficulty - gets too hard too fast</li>
                                <li>Improvement: SFX updates - courtesy of <i>chlampf</i></li>
                                <li>Improvement: Environment particles</li>
                                <li>Improvement: Better instructions for how flight control works</li>
                                <li>Bug fix: Some Rings spawn too close to objects </li>
                            </ul>

                            <p>
                                <b>2019-02-16 [Media]:</b>
                            </p>
                            <p><a href="https://www.youtube.com/channel/UCp3cAkD4fmswPyVy1hWIg8g" target="_blank">@RaMarcus</a> covers Dodgeblock</p>
                            <div className="youtube-container">
                                <div className="youtube">
                                    <YouTube
                                        videoId="m4AdORl_Hg0"
                                        opts={opts}
                                        onReady={this._onReady}
                                    />
                                </div>
                            </div>
                            <p>&nbsp;</p>

                            <p>
                                <b>2019-02-07 [Announcement]:</b>
                            </p>
                            <p>Happy to announce Dodgeblock VR is now in Beta for the Oculus Go. <br/> If you'd like early access, please <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=YpW2sDEzL0OUhERV1gX7c1ydkbxQFU9PrWOu7c3jAB1UQkRLS0NCVE9JREQxODBGWDlNNUlPSEtGNC4u" target="_blank">sign-up</a>.</p>
                            <p>&nbsp;</p>

                            <div className="content">
                                <p>
                                    <b>2019-02-06 [Beta Release, v0.3]:</b>
                                </p>
                                <ul>
                                    <li>Added: new pause screen when clicking the <i>back button</i> on the Oculus Go controller. </li>
                                    <li>Fixed: issue when Oculus Go had the controller set to <i>left-handed</i> mode.</li>
                                </ul>
                            </div>
                        </div>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p><a class="button is-primary" href="https://forms.office.com/Pages/ResponsePage.aspx?id=YpW2sDEzL0OUhERV1gX7c1ydkbxQFU9PrWOu7c3jAB1UQkRLS0NCVE9JREQxODBGWDlNNUlPSEtGNC4u" target="_blank" title="Contact Us">Request access, or submit feedback</a></p>

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
