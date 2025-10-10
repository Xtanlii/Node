const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  userId: Number,
  name: String,
  email: String,
  role: {
    type: String,
    enum: ["buyer", "seller"],
    required: true
  },
  verified: {
    type: String,
    enum: ["true", "false"],
    required: true
  },
  city: String,
  lastLogin: {
    type: Date,
    default: Date.now
  }
})

module.exports =  mongoose.model('Users', UserSchema);