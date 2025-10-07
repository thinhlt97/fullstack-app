const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET /api/products
router.get('/', async (req, res) => {
  const products = await Product.find().sort({createdAt: -1});
  res.json(products);
});

// POST /api/products
router.post('/', async (req, res) => {
  const p = new Product(req.body);
  await p.save();
  res.status(201).json(p);
});

// GET /api/products/:id
router.get('/:id', async (req, res) => {
  const p = await Product.findById(req.params.id);
  if (!p) return res.status(404).json({ message: 'Not found' });
  res.json(p);
});

// PUT /api/products/:id
router.put('/:id', async (req, res) => {
  const p = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!p) return res.status(404).json({ message: 'Not found' });
  res.json(p);
});

// DELETE /api/products/:id
router.delete('/:id', async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

module.exports = router;
