const Mongoose = require('mongoose');

const ProductSchema = new Mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 100,
  },
  quantity: {
    type: Number,
    min: 1,
    default: 1
  },
  price: {
    type: Number,
    required: true,
    min: 0,
    get: (value) => `$${value}`
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { toJSON: { getters: true }, toObject: { getters: true } })

const Product = Mongoose.model('test', ProductSchema);

module.exports = Product
