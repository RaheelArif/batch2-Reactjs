import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/header/Navbar"
import Container from './components/container/container';
import About from "./components/aboutUs/about";
import { BrowserRouter, Route } from "react-router-dom";
import Products from './components/products';
class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact  path="/" component={Products} /> 
   
          <Route  path="/price" component={Container} /> 
          <Route path="/about" component= {About} />
        </div>
      </BrowserRouter>
    )
  }
}



export default App;
