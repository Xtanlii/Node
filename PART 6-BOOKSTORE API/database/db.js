const mongoose = require('mongoose');

const connectToDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://xtan:xtan@cluster0.90etgtk.mongodb.net/');
    console.log('MongoDB is connected successfully !')
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1)
  }
}

module.exports = connectToDB;