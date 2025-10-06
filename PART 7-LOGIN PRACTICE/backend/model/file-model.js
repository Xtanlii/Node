const mongoose = require('mongoose');

const FileSchema = new mongoose.Schema({
  publicId: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
},{timestamps: true})

module.exports = mongoose.model('Files', FileSchema);