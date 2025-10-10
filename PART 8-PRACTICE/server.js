require('dotenv').config()

const express = require('express');
const app = express();
const connectDB = require('./db/db');
const logRoute = require('./routes/log-routes')
const productRoute = require('./routes/product-routes')
const orderRoute = require('./routes/order-routes')
const userRoute = require('./routes/user-routes')
const postRoute = require('./routes/post-routes')

connectDB();

//middleware
app.use(express.json());
app.use('/logs', logRoute)
app.use('/products', productRoute)
app.use('/orders', orderRoute)
app.use('/users', userRoute)
app.use('/posts', postRoute)

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
})