const Product = require('../model/product-schema');

const getProducts = async (req, res) => {
  try {
    const allProducts = await Product.find({})
    if(!allProducts) {
      return res.status(404).json({
        success: false,
        message: "Products not found"
      })
    }
    res.status(200).json({
      success: true,
      message: "Products displayed successfully",
      data: allProducts
    })
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something  went wrong! Try again later"
    })
  }
}

const getSingleProduct = async (req, res) => {
  try {
    const {id} = req.params
    const singleProduct = await Product.findById(id);
    if(!singleProduct) {
      return res.status(404).json({
        success: false,
        message: "Product ID not found! , Try with a different ID"
      })
    }
    res.status(200).json({
      success: true,
      message: `Products with ID ${id} displayed successfully`,
      data: singleProduct
    })

  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something  went wrong! Try again later"
    })
  }
}

const addProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    if(!newProduct) {
      return res.status(404).json({
        success: false,
        message: "Something went wrong"
      })
    }
    res.status(201).json({
      success: true,
      message: "Added new Product",
      data: newProduct
    })
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something  went wrong! Try again later"
    })
  }
}

const updateProduct = async (req, res) => {
  try {
    const {id} = req.params;
    const updateProduct = await Product.findByIdAndUpdate(
      id,
      req.body,
      {new: true}
    )
    if(!updateProduct) {
      return res.status(404).json({
        success: false,
        message: "Product with id not found"
      })
    }
    res.status(201).json({
      success: true,
      message: "Product is updated successfully",
      data: updateProduct
    })
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something  went wrong! Try again later"
    })
  }
}

const deleteProduct = async (req, res) => {
  try {
    const {id} = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id)
    if(!deletedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product with id not found"
      })
    }
    res.status(200).json({
      success: true,
      message: "Product is deleted successfully",
      data: deletedProduct
    })
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something  went wrong! Try again later"
    })
  }
}


module.exports = {
  getProducts,
  getSingleProduct,
  addProduct,
  updateProduct,
  deleteProduct
}
