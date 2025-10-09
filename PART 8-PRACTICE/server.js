require('dotenv').config()

const express = require('express');
const app = express();
const connectDB = require('./db/db')

connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
})