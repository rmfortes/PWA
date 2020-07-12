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
      width: 500,
      height: 500,
      aspectRatio: 1/1
    };

    return (
      <div >
        <Webcam
          className="camera"
          audio={false}
          maxheight="100%"
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width="100%"
          videoConstraints={videoConstraints}
        />
        <br></br>
        <button className="usa-button usa-button--base usa-focus" onClick={this.capture}>SNAP PHOTO</button>
      </div>
    );
  }
}

export default Camera;
