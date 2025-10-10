const express = require('express');
const { savePosts } = require('../controllers/post-controller');
const router = express.Router();


router.post('/add', savePosts);

module.exports = router;