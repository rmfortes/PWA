import React, { Component } from "react";
import "uswds/dist/css/uswds.css";
import "./App.css";
import { Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Map from "./Components/Map/Map";
import Camera from "./Components/Camera/Camera";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Route path="/about" exact component={About} />
        <Route path="/snap" exact component={Camera} />
        <Route path="/map" exact component={Map} />
      </div>
    );
  }
}

export default App;
