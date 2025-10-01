const express = require('express');
const authMiddleware = require('../middleware/auth-middleware');
const router = express.Router();
const User = require('../model/user-model')


router.get('/home', authMiddleware, async(req, res) => {
  const user = await User.findById(req.userInfo.userId);
  res.json({
    message: `Welcome ${user.username}`,
    user: req.userInfo
  })
})

module.exports = router;