// src/pages/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <img src="/Kitty Diary 1.jpg" alt="Kitty Diary Logo" className="logo-hero" />

      <div className="band-row">
        <div className="band-image-frame">
          <a href="/band.jpg" target="_blank" rel="noopener noreferrer">
            <img src="/band.jpg" alt="Kitty Diary Band" className="band-image" />
          </a>
        </div>
        <div className="band-image-frame">
          <a href="/band2.jpg" target="_blank" rel="noopener noreferrer">
            <img src="/band2.jpg" alt="Kitty Diary Band 2" className="band-image" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
