// src/pages/Merch.js
import React, { useEffect, useState } from 'react';
import './Merch.css';

const Merch = () => {
  const [merchItems, setMerchItems] = useState([]);

  useEffect(() => {
    fetch('/merch.json')
      .then((res) => res.json())
      .then((data) => setMerchItems(data))
      .catch((err) => console.error('Failed to load merch:', err));
  }, []);

  return (
    <div className="merch-container">
      <h2>Merch</h2>
      <div className="merch-grid">
        {merchItems.map((item, index) => (
          <div className="merch-card" key={index}>
            <img src={item.image} alt={item.title} className="merch-image" />
            <h3>{item.title}</h3>
            <p>{item.type}</p>
            <p className="price">{item.price}</p>
            <button disabled>Buy</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Merch;
