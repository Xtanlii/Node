const multer = require('multer');
const cloudinary = require('../config/cloudinary')
const File = require('../model/file-model');


const uploadToCloudinary = async(filePath) => {
  try {
    const result = await cloudinary.uploader.upload(filePath)
    const newFile = new File({
      url: result.url,
      publicId: result.public_id,
    })
    await newFile.save();

  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Something went wrong!"
    })
  }
}

const getFiles = async(req,res) => {
  try {
    const file = await File.find({});
    if(file){
      res.status(200).json({
        success: true,
        data: file
      })
    }else {
      res.status(404).json({
        success: false,
        message: "Files not found, Try again later"
      })
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Something went wrong!"
    })
  }
}

module.exports = {
  uploadToCloudinary,
  getFiles
}