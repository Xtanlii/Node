const Image = require('../models/Image');
const { uploadToCloudinary } = require("../helpers/cloudinaryHelper")
const fs = require('fs');
const cloudinary = require('../config/cloudinary')

const uploadImage = async (req, res) => {
  try {
    //check if file is missing in the request object
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "File is required. Please upload an image"
      })
    }

    //upload to Cloudinary
    const { url, publicId } = await uploadToCloudinary(req.file.path)

    //store the image url and public id along with the uploaded userid in the database
    const newImage = new Image({
      url,
      publicId,
      uploadedBy: req.userInfo.userId
    })

    await newImage.save()

    //delete the file from local storage
    fs.unlinkSync(req.file.path);

    res.status(201).json({
      success: true,
      message: "Image uploaded successfully",
      image: newImage
    })

  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Somehting went wrong! Please try again"
    })
  }
}

const fetchImages = async (req, res) => {

  try {
    const images = await Image.find({});
    if (!images) {
      res.status(404).json({
        success: false,
        message: "Images not found"
      })
      return
    }
    res.status(200).json({
      success: true,
      data: images
    })
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again later"
    })
  }
}

const deleteImage = async (req, res) => {
  try {
    const getCurrentIdofImageToBeDeleted = req.params.id;
    const userId = req.userInfo.userId;

    const image = await Image.findById(getCurrentIdofImageToBeDeleted);

    if (!image) {
      return res.status(404).json({
        success: false,
        message: "Image not found"
      })
    };

    //check if this image is uploaded by the current user
    if (image.uploadedBy.toString() !== userId) {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to delete this image"
      })
    }

    //delete this image first from your cloudinary storage
    await cloudinary.uploader.destroy(image.publicId);

    //delete this image from database.
    await Image.findByIdAndDelete(getCurrentIdofImageToBeDeleted);

    res.status(200).json({
      success: true,
      message: "Image deleted successfully"
    })


  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again later"
    })
  }
}


module.exports = {
  uploadImage,
  fetchImages,
  deleteImage
}