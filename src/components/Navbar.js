// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cartItems, removeFromCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <nav style={{ position: 'relative', padding: '1rem', backgroundColor: '#222', color: 'white', display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', marginRight: '1rem' }}>Home</Link>
        <span style={{ cursor: 'pointer' }} onClick={() => setIsOpen(!isOpen)}>
          Cart ({totalItems})
        </span>
      </div>

      {isOpen && (
        <div style={{
          position: 'absolute',
          right: 10,
          top: 60,
          backgroundColor: '#fff',
          color: '#000',
          boxShadow: '0 0 10px rgba(0,0,0,0.3)',
          width: '300px',
          zIndex: 100,
          borderRadius: '8px',
          padding: '1rem'
        }}>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <div>
              {cartItems.map(item => (
                <div key={item.id} style={{ marginBottom: '1rem', borderBottom: '1px solid #ddd', paddingBottom: '0.5rem' }}>
                  <strong>{item.name}</strong><br />
                  Quantity: {item.quantity}<br />
                  <p>${item.price} each</p>
                  <button onClick={() => removeFromCart(item.id)} style={{ marginTop: '0.5rem' }}>Remove</button>
                </div>
              ))}
              <div style={{ borderTop: '1px solid #ddd', paddingTop: '1rem' }}>
                <p><strong>Total: ${totalPrice}</strong></p>
                <Link to="/cart">
                  <button style={{ width: '100%', padding: '0.5rem', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px' }} onClick={() => setIsOpen(false)}>
                    Checkout
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
