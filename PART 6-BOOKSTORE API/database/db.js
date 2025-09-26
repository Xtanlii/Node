require('dotenv').config()
const mongoose = require('mongoose');
const key = process.env.KEY


const connectToDB = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${key}cluster0.90etgtk.mongodb.net/`);
    console.log('MongoDB is connected successfully !')
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1)
  }
}

module.exports = connectToDB;