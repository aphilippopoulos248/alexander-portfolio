import React from 'react';

const VideoComponent = () => {
  return (
    <div>
      <video width="100%" controls>
        <source src="/videos/FullAnimationV4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;