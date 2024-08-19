import React from 'react';

const Call = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8">
          <div className="video-container">
            <video id="localVideo" autoplay muted></video>
            <video id="remoteVideo" autoplay></video>
          </div>
        </div>
        <div className="col-md-4">
          <div className="controls">
            <button id="startCall" className="btn btn-primary btn-block">Start Call</button>
            <button id="endCall" className="btn btn-danger btn-block">End Call</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Call;
