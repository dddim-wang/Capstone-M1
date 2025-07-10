// src/pages/Media.js
import React from 'react';
import './Media.css';

const Media = () => {
  return (
    <div className="media-container">
      <h2>Media</h2>

      <div className="spotify-section">
        <h3>🎧 Listen on Spotify</h3>
        <iframe
          src="https://open.spotify.com/embed/artist/2dopdeeT6ZFZLcHaEhDdIu?utm_source=generator"
          width="100%"
          height="160"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Kitty Diary Spotify"
        ></iframe>
      </div>

      <div className="video-section">
        <h3>🎬 Midwin Prom</h3>
        <video controls className="video-player">
          <source src="/Midwin Prom.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="video-section">
        <h3>🎬 夏末笔记</h3>
        <iframe
          className="video-embed"
          src="https://player.bilibili.com/player.html?bvid=BV19pU9YqECu&autoplay=0"
          allowFullScreen
          title="夏末笔记"
        ></iframe>
      </div>

      <div className="video-section">
        <h3>🎬 MIDWIN</h3>
        <iframe
          className="video-embed"
          src="https://player.bilibili.com/player.html?bvid=BV18NX3Y9EiX&autoplay=0"
          allowFullScreen
          title="MIDWIN"
        ></iframe>
      </div>

      <div className="video-section">
        <h3>🎬 出逃夏日</h3>
        <iframe
          className="video-embed"
          src="https://player.bilibili.com/player.html?bvid=BV1geHTeJEWQ&autoplay=0"
          allowFullScreen
          title="出逃夏日"
        ></iframe>
      </div>
    </div>
  );
};

export default Media;
