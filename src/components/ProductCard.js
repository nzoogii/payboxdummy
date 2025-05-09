// src/components/ProductCard.js
import React from 'react';
import { useCart } from '../context/CartContext';  // Import useCart hook

function ProductCard({ product }) {
  const { addToCart } = useCart();  // Access addToCart function from context

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
