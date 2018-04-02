import React, { Component } from 'react';
import './App.css';
import Cryptocurrency from './Components/Cryptocurrency'

class App extends Component {
  render() {
    return (
      <div className="main-div">
        <header className="App-header">
          <h1 className="App-title">Cryptocurrency Tracker</h1>
        </header>
        <Cryptocurrency />
      </div>
    );
  }
}

export default App;
