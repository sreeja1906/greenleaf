import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, removeItem } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();
  const totalCost = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Shopping Cart</h2>
      <p>Total Items: {cartItems.reduce((acc, i) => acc + i.quantity, 0)}</p>
      <p>Total Cost: ${totalCost}</p>

      {cartItems.map(item => (
        <div key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <img src={item.img} alt={item.name} width="50" />
          <p style={{ flex: 1, marginLeft: '10px' }}>{item.name} - ${item.price}</p>
          <button onClick={() => dispatch(decrement(item.id))}>-</button>
          <span style={{ margin: '0 10px' }}>{item.quantity}</span>
          <button onClick={() => dispatch(increment(item.id))}>+</button>
          <button onClick={() => dispatch(removeItem(item.id))} style={{ marginLeft: '10px' }}>Delete</button>
        </div>
      ))}

      <div style={{ marginTop: '20px' }}>
        <button onClick={() => alert('Coming Soon!')}>Checkout</button>
        <Link to="/products"><button style={{ marginLeft: '10px' }}>Continue Shopping</button></Link>
      </div>
    </div>
  );
}
