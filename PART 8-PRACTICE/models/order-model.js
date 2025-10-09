const mongoose = require('mongoose');

const OrdersSchema = new mongoose.Schema({
  userId: String,
  totalAmount: Number,
  status: {
    type: String,
    enum: ["completed", "pending", "cancelled"],
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Orders', OrdersSchema);
