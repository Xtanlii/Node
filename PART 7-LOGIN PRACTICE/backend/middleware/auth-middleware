const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  console.log(authHeader);
  // split the bearer and the token
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Access Denied! No token provided. Please login to continue.'
    });
  }

  // decode and verify the token
  try {
    const decodedTokenInfo = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decodedTokenInfo);
    req.userInfo = decodedTokenInfo;
    next();

  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: 'Access Denied! No token provided. Please login to continue.'
    });
  }

}

module.exports = authMiddleware;