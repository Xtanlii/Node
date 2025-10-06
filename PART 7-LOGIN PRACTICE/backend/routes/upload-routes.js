const express = require('express');
const router = express.Router();
const { getFiles, uploadFiles } = require('../controller/upload-controller');
const uploadMiddleware = require('../middleware/upload-middleware');


router.post('/upload',uploadMiddleware.single('image'), uploadFiles);

router.get('/upload', getFiles);


module.exports = router