require('dotenv').config();
const express = require('express');
const app = express()
const mongoose = require('mongoose');
const productRoutes = require('./routes/product-routes')
const bookRoutes = require('./routes/book-routes')

//connect to Db
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDb connected succesfully'))
  .catch((err) => console.log("ERROR", err))

//use  midddleware
app.use(express.json())
app.use('/products', productRoutes)
app.use('/reference', bookRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Server is  now running on port ${process.env.PORT}`);
})