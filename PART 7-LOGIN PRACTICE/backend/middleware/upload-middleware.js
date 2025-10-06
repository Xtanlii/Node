const multer = require('multer');



const uploadMiddleware = (req, res, next) => {
  try {
    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, '/uploads')
      },
      filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + 'v1'
        cb(null, file.fieldname + '-' + uniqueSuffix)
      }
    })
    const upload = multer({storage: storage})
    next();
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something went wrong!"
    })
  }
}

module.exports = uploadMiddleware;