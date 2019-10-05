import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/header/Navbar"
import LeftSide from "./components/container/leftSide"

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
       <LeftSide />


          
      </div>
    )
  }
}



export default App;
