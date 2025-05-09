// src/components/SuggestProduct.js
import React, { useState } from 'react';
import axios from 'axios';

const SuggestProduct = () => {
  const [link, setLink] = useState('');
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await axios.post('http://localhost:5000/api/preview', { url: link });
      setPreview(response.data);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch preview.');
      setPreview(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '2rem auto' }}>
      <h2>Suggest a Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          placeholder="Paste product link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
          style={{ width: '100%', padding: '8px' }}
        />
        <button type="submit" style={{ marginTop: '10px' }} disabled={loading}>
          {loading ? 'Loading...' : 'Preview Product'}
        </button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {preview && (
        <div style={{ marginTop: '1rem', border: '1px solid #ccc', padding: '10px' }}>
          {preview.image && (
            <img src={preview.image} alt="preview" style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }} />
          )}
          <h3>{preview.title}</h3>
          <p>{preview.description}</p>
          <a href={link} target="_blank" rel="noopener noreferrer">View Product</a>
        </div>
      )}
    </div>
  );
};

export default SuggestProduct;
