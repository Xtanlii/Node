
const isAdmin = (req, res, next) => {
  const { role } = req.userInfo;
  if (role !== 'admin') {
    return res.status(403).json({
      success: false,
      message: 'Access Denied! Admin rights required'
    });
  }
  next();
}

module.exports = isAdmin;