import React, { Component } from 'react';
import Header from './Components/Header';
import Cryptocurrency from './Components/Cryptocurrency';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div className="main-div">
        <Header />
        <Cryptocurrency />
        <Footer />
      </div>
    );
  }
}

export default App;
