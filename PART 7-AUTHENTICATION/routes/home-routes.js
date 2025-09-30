const express = require('express');
const authMiddleware = require('../middleware/auth-middleware');
const router = express.Router();


//all routes related to home will be defined here
router.get('/welcome', authMiddleware, (req, res) => {
  const {username, userId, role} = req.userInfo;
  res.json({
    message: "Welcome to the home page",
    user: {
      _id: userId,
      username,
      role
    }
  })
})

module.exports = router;