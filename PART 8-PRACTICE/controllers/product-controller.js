const Product = require('../models/products-model');


const saveProducts = async (req, res) => {
  try {
    const sampleProduct = [
      { name: "Smartphone", category: "Electronics", price: 800, tags: ["tech", "new", "mobile"] },
      { name: "Laptop", category: "Electronics", price: 1500, tags: ["tech", "work", "gaming"] },
      { name: "Headphones", category: "Accessories", price: 200, tags: ["music", "tech", "wireless"] },
      { name: "Game Console", category: "Gaming", price: 600, tags: ["gaming", "tech"] },
      { name: "Office Chair", category: "Furniture", price: 300, tags: ["comfort", "office"] }
    ]
    const product = await Product.insertMany(sampleProduct)
    res.status(201).json({
      success: true,
      message: "Products have been saved to db"
    })

  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    })
  }
}

module.exports = { saveProducts };