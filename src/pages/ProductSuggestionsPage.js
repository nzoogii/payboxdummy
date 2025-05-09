// src/pages/ProductSuggestionsPage.js
import React, { useState } from 'react';

const ProductSuggestionsPage = () => {
  const [suggestedProducts, setSuggestedProducts] = useState([]);

  // Assuming you're storing product suggestions in localStorage
  const fetchSuggestedProducts = () => {
    const savedSuggestions = JSON.parse(localStorage.getItem('productSuggestions')) || [];
    setSuggestedProducts(savedSuggestions);
  };

  React.useEffect(() => {
    fetchSuggestedProducts();
  }, []);

  return (
    <div style={styles.container}>
      <h1>Suggested Products</h1>
      {suggestedProducts.length === 0 ? (
        <p>No product suggestions yet.</p>
      ) : (
        <ul>
          {suggestedProducts.map((product, index) => (
            <li key={index}>
              <a href={product.link} target="_blank" rel="noopener noreferrer">
                {product.link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
};

export default ProductSuggestionsPage;
