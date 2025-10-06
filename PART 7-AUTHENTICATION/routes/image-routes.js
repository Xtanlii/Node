const express = require('express');
const { uploadImage, fetchImages } = require('../controllers/image-controller');
const authMiddleware = require('../middleware/auth-middleware');
const adminMiddleware = require('../middleware/admin-middleware');
const uploadMiddleware = require('../middleware/image-middleware');
const router = express.Router();

// upload the image
router.post('/upload',authMiddleware, adminMiddleware, uploadMiddleware.single('image'), uploadImage)

//get all the images
router.get('/get',authMiddleware, fetchImages )

module.exports = router;