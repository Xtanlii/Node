const express = require('express');
const { saveProducts } = require('../controllers/product-controller');
const router = express.Router();


router.post('/add', saveProducts)

module.exports = router;