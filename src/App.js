import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="user">User Info goes here</div>
        <div id="userContent">Users' Decks/Cards go here</div>
        <div id="otherContent">Other users' Decks/Cards go here</div>
      </div>
    );
  }
}

export default App;
