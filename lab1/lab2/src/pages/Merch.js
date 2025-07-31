// src/pages/Merch.js
import React, { useEffect, useState } from 'react';
import './Merch.css';

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email }),
    });

    const data = await response.json();
    setMessage(data.message || 'Signed up!');
    setUsername('');
    setEmail('');
  };

  return (
    <div className="signup-form">
      <h3>Fan Sign Up</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

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
      <SignUpForm />
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
