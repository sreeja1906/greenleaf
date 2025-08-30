import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const totalItems = useSelector(state =>
    state.cart.cartItems.reduce((acc, item) => acc + item.quantity, 0)
  );

  return (
    <header style={{ padding: '10px', background: '#d4f4dd', display: 'flex', justifyContent: 'space-between' }}>
      <h1>GreenLeaf</h1>
      <nav>
        <Link to="/products" style={{ marginRight: '20px' }}>Products</Link>
        <Link to="/cart">Cart ({totalItems})</Link>
      </nav>
    </header>
  );
}
