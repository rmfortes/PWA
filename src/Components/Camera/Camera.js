import React, { Component } from "react";
import Webcam from "react-webcam";
import usa-button;

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
          <button className="button" onClick={this.capture}>
            SNAP PHOTO
          </button>
          <button class="usa-button usa-button--base">Default</button>
        </form>
      </div>
    );
  }
}

export default Camera;
