import React, { Component } from "react";
import "../App.css";
import Navbar from "./Navbar";
import Body from "./Body";
import { ParallaxProvider } from "react-scroll-parallax";

class App extends Component {
  render() {
    return (
      <ParallaxProvider className="App">
        <Navbar></Navbar>
        <Body></Body>
      </ParallaxProvider>
    );
  }
}

export default App;
