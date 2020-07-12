import React, { Component } from "react";
import Webcam from "react-webcam";


class Camera extends Component {

  setRef = (webcam) => {
    this.webcam = webcam;
  };

  capture = (e) => {
    e.preventDefault();
    const imageSrc = this.webcam.getScreenshot();
    console.log(imageSrc);
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
        <button class="usa-button usa-button--base usa-focus" onClick={this.capture}>SNAP PHOTO</button>
        </form>
      </div>
    );
  }
}

export default Camera;
