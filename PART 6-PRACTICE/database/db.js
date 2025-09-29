const Mongoose = require('mongoose');
const key = require('../secrets.js')

const connectToDB = async () => {
  try {
    await Mongoose.connect(key.key);
    console.log("Database connected succesfully")
  } catch (err) {
    console.error('Error connecting database',err.message)
  }
}

module.exports = connectToDB

