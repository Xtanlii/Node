const express = require('express');
const { saveOrders, biggestSpender,  } = require('../controllers/order-controller');
const router = express.Router();


router.post('/add', saveOrders)
router.get('/get', biggestSpender)

module.exports = router;