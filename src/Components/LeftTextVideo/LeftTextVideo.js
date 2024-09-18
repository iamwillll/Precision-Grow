import React from 'react';
import './LeftTextVideo.css'; // Import custom CSS for additional styling

const LeftTextVideo = ({ title, title1, description, buttonText, buttonLink, videoSrc, buttonText1, buttonLink1 }) => {
  return (
    <div className="video-background-container">
      <div className="video-background-wrapper">
        <video autoPlay muted loop className="video-background">
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
      <div className="content-box">
        <h1>{title}</h1>
        <h5 style={{ color: '#c4e800' }}>{title1}</h5>
        <p>{description}</p>
        <a href={buttonLink} className="btn px-5 py-3 fs-5" style={{ background: '#a9cb00', color: 'white' }}>
          {buttonText}
        </a>
        {buttonText1 && buttonLink1 && (
          <a href={buttonLink1} className="btn px-5 py-3 mx-3 fs-5" style={{ background: 'white', color: '#a9cb00'}}>
            {buttonText1}
          </a>
        )}
      </div>
    </div>
  );
};

export default LeftTextVideo;
