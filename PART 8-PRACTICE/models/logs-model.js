const mongoose = require('mongoose');

const LogsSchema = new mongoose.Schema({
  message: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Logs', LogsSchema);