const keys = require('../secrets')
const mongoose = require('mongoose');


const connectToDB = async () => {
  try {
    await mongoose.connect(keys.KEY);
    console.log('MongoDB is connected successfully !')
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1)
  }
}

module.exports = connectToDB;