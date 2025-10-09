const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: String,
  tags: [String]
});

module.exports = mongoose.model('Posts', PostSchema);