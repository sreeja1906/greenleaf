import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div style={{ textAlign: 'center', padding: '50px', background: '#c8f0d4', height: '100vh' }}>
      <h1>Welcome to GreenLeaf</h1>
      <p>Your one-stop online store for houseplants.</p>
      <Link to="/products">
        <button style={{ padding: '10px 20px', fontSize: '16px' }}>Get Started</button>
      </Link>
    </div>
  );
}
