const express = require('express');
const { saveLogs } = require('../controllers/log-controller');
const router = express.Router();


router.post('/add', saveLogs)

module.exports = router;