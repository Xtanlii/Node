const express = require('express');
const {registerUser, loginUser} = require('../controllers/auth-controller');
const router = express.Router();


//all routes related to user authentication & authorization will be defined here
router.post('/register',registerUser );
router.post('/login',loginUser );




module.exports = router;