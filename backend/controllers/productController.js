import { products } from '../models/productModel.js';

let localProducts = [...products];

export const getAllProducts = (req, res) => {
  try {
    res.json(localProducts);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const getProductById = (req, res) => {
  try {
    const product = localProducts.find(p => p.id === parseInt(req.params.id));
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const createProduct = (req, res) => {
  try {
    const newProduct = {
      id: Date.now(),
      name: req.body.name || 'New Gudiya Anda Mala',
      price: Number(req.body.price) || 1499,
      originalPrice: Number(req.body.originalPrice) || 1999,
      image: req.body.image || 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800',
      description: req.body.description || 'Authentic blessed Gudiya Anda Mala',
      category: req.body.category || 'Classic',
      rating: Number(req.body.rating) || 5.0,
      reviews: 1,
      inStock: true,
      features: req.body.features || ['100% Authentic', 'Pooja Energized']
    };
    localProducts.unshift(newProduct);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error creating product', error: error.message });
  }
};

export const updateProduct = (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const index = localProducts.findIndex(p => p.id === productId);
    if (index === -1) {
      return res.status(404).json({ message: 'Product not found' });
    }
    localProducts[index] = { ...localProducts[index], ...req.body };
    res.json(localProducts[index]);
  } catch (error) {
    res.status(500).json({ message: 'Error updating product', error: error.message });
  }
};

export const deleteProduct = (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    localProducts = localProducts.filter(p => p.id !== productId);
    res.json({ message: 'Product deleted successfully', id: productId });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting product', error: error.message });
  }
};

