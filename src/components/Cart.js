// src/components/Cart.js (CartItem component)
import React from 'react';
import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { removeFromCart } = useCart();  // Get remove function from context

  return (
    <li style={{ display: 'flex', marginBottom: '1rem' }}>
      <img src={item.image} alt={item.name} style={{ width: '100px', marginRight: '1rem' }} />
      <div>
        <p>{item.name}</p>
        <p>${item.price.toFixed(2)}</p>
        <button onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>
    </li>
  );
};

export default CartItem;
