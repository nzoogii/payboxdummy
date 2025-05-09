// src/components/CartItem.js
import React from 'react';

const CartItem = ({ item }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem 0' }}>
      <h3>{item.name}</h3>
      <p>Price: {item.price}</p>
    </div>
  );
};

export default CartItem;
