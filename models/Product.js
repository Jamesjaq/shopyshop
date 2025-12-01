// Product Schema
const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  stock: { type: Number, default: 0 },
  imageUrl: { type: String },
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Product', ProductSchema);