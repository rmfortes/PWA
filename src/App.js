import React, { Component } from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import ReadMe from "./Components/ReadMe/ReadMe";
import Map from "./Components/Map/Map";
import Camera from "./Components/Camera/Camera";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Route path="/" exact component={ReadMe} />
        <Route path="/camera" exact component={Camera} />
        <Route path="/map" exact component={Map} />
      </div>
    );
  }
}

export default App;
