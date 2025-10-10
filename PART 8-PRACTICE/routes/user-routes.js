const express = require('express');
const { saveUsers, UsertotalAmountSpent } = require('../controllers/user-controller');
const router = express.Router();


router.post('/add', saveUsers)
router.get('/lookup', UsertotalAmountSpent)


module.exports = router;