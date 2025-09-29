const express = require('express');
const router = express.Router();
const { 
  getProducts,
  getSingleProduct,
  addProduct,
  updateProduct,
  deleteProduct } = require('../controllers/product-controllers.js')


  router.get('/get', getProducts),
  router.get('/get/:id', getSingleProduct),
  router.post('/add', addProduct),
  router.put('/update/:id', updateProduct),
  router.delete('/delete/:id', deleteProduct),


module.exports = router;
