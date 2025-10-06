
const cloudinary = require('../config/cloudinary')
const File = require('../model/file-model');


const uploadFiles = async(req, res) => {
  try {
    if(!req.file) {
      return res.status(400).json({
        success: false,
        message: "File is required. Please upload an image"
      })
    }
  
    const filePath = req.file.path
    const {url, public_id} = await cloudinary.uploader.upload(filePath)
    const newFile = new File({
      url,
      publicId: public_id,
    })
    await newFile.save();
    res.status(201).json({
      success: true,
      message: "File is saved"
    })

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
      res.status(200).json(file)
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
  uploadFiles,
  getFiles
}