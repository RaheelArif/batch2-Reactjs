import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/header/Navbar"
import Container from './components/container/container';
import About from "./components/aboutUs/about";
import { BrowserRouter, Route } from "react-router-dom";
import Products from './components/products';
import Login from './components/auth/login';
import Signup from "./components/auth/signup";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
class App extends Component {
    // npm install redux react-redux
 

  render() {


    return (
      <BrowserRouter>
        <div>

          <Navbar />
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Products} />
          <Route path="/signup" component={Signup} />
          <Route path="/price" component={Container} />
          <Route path="/about" component={About} />
        </div>
      </BrowserRouter>
    )
  }
}



export default App;
