const express = require('express');
const { insertSampleProducts, getProductStats, getProductAnalysis } = require('../controllers/product-controller');
const router = express.Router();


router.post('/add', insertSampleProducts)
router.get('/get', getProductStats)
router.get('/analysis', getProductAnalysis)

module.exports = router;