import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="about">
        <h1>Snap Map</h1>
        <p>Snap Map is a progressive web app that allows users to take photos and see their position on a map.
        <br></br>
          <br></br>To take a photo, click 'SNAP'.
          <br></br>
          <br></br>To see your location, click 'MAP'.
          <br></br>
          <br></br>If you're viewing this page on your mobile browser, the menu can be accessed through the icon on the top right of your screen.
        </p>
      </div>
    );
  }
}

export default About;