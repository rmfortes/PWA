import React, { Component } from "react";
import Webcam from "react-webcam";

class Camera extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  setRef = (webcam) => {
    this.webcam = webcam;
  };

  capture = (e) => {
    e.preventDefault();
    const imageSrc = this.webcam.getScreenshot();
    console.log(imageSrc);
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  };

  render() {
    const videoConstraints = {
      width: 400,
      height: 795,
      // facingMode: "user",
    };

    return (
      <div>
        <Webcam
          className="camera"
          audio={false}
          height={710}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={370}
          videoConstraints={videoConstraints}
        />

        <form onSubmit={this.capture}>
          <button className="button" onClick={this.capture}>
            SNAP PHOTO
          </button>
        </form>
      </div>
    );
  }
}

export default Camera;
