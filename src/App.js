import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './sass/mystyles.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <section class="hero is-info is-fullheight">
            <div class="hero-head">
              <h1 className="title pageTitle">dodgeblock VR</h1>
            </div>

            <div class="hero-body">
                <div class="container has-text-centered">
                    <div class="column is-6 is-offset-3">
                        <h1 class="title">
                            Coming Soon
                        </h1>
                        <h2 class="subtitle">
                            An endless runner, re-imagined in VR. <br/> Fly through a retro-arcade inspired environment using 3DOF.
                        </h2>
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
