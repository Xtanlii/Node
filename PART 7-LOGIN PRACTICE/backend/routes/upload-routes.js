const express = require('express');
const router = express.Router();
const {uploadToCloudinary, getFiles} = require('../controller/upload-controller');
const uploadMiddleware = require('../middleware/upload-middleware');


router.post('/upload',uploadMiddleware, uploadToCloudinary);

router.get('/upload', getFiles);


module.exports = router