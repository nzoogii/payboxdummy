// src/pages/ProductPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductPage = () => {
  const { id } = useParams();  // Get the product ID from the URL
  const { addToCart } = useCart();
  const product = { id, name: 'Example Product', price: 29.99, image: 'https://via.placeholder.com/150' };  // Example product

  const handleAddToCart = () => {
    addToCart(product);  // Adding the product to the cart
    console.log('Added to cart:', product);  // Log added product for debugging
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductPage;
