import React, { Component } from "react";
import Webcam from "react-webcam";

class Camera extends Component {
  setRef = (webcam) => {
    this.webcam = webcam;
  };

  render() {
    const videoConstraints = {
      width: 400,
      height: 810,
      facingMode: "user"
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
        <button className="button" onClick={this.capture}>Snap Photo</button>
      </div>
    );
  }
}

export default Camera;
