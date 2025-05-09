const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { getLinkPreview } = require('link-preview-js');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 5000;

// Temporary in-memory product list
let suggestedProducts = [];

app.post('/api/preview', async (req, res) => {
  const { url } = req.body;
  try {
    const preview = await getLinkPreview(url);
    res.json({
      title: preview.title || 'No title',
      description: preview.description || 'No description',
      image: preview.images?.[0] || '',
      url,
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch preview' });
  }
});

// Save submitted product
app.post('/api/products', (req, res) => {
  const { title, description, image, url } = req.body;

  const newProduct = {
    id: suggestedProducts.length + 1,
    title,
    description,
    image,
    url,
    price: 'Calculating...',
  };

  suggestedProducts.push(newProduct);
  res.status(201).json(newProduct);
});

// Optional: Get all suggested products
app.get('/api/products', (req, res) => {
  res.json(suggestedProducts);
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
