import React, { Component } from 'react';

import './App.css';
import Main from './Main'

class App extends Component {

  state = {
    user: {
      uid: 'jakeharris12',
      userName: 'Jake BOI',
    }
  }

  render() {
    return (
      <div className="App">
        <Main user={this.state.user}/>
      </div>
    );
  }
}

export default App;
