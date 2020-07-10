import React, { Component } from 'react';
import Webcam from "react-webcam";

// const WebcamComponent = () => <Webcam />;

class Camera extends Component {
    render() {
        return (
            <div>
              <Webcam />  
            </div>
        );
    }
}

export default Camera;