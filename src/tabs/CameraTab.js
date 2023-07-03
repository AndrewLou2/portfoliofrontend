import React, { Component } from 'react';
import Webcam from 'react-webcam';

class CameraTab extends Component {
  render() {
    return (
      <div className="camera-tab">
        <Webcam audio={false} width={800} />
      </div>
    );
  }
}

export default CameraTab;
