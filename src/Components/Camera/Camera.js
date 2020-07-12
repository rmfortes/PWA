import React, { Component } from "react";
import Webcam from "react-webcam";

class Camera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: "",
      longitude: "",
    };
  }

  setRef = (webcam) => {
    this.webcam = webcam;
  };

  capture = (e) => {
    e.preventDefault();
    let currentComponent = this;
    const imageSrc = this.webcam.getScreenshot();
    console.log(imageSrc);
    navigator.geolocation.getCurrentPosition(function (position) {
      currentComponent.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
      console.log(currentComponent.state)
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
