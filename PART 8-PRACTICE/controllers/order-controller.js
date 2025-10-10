const Order = require('../models/order-model');




const saveOrders = async (req, res) => {
  try {
    const sampleOrders = [
      { userId: 9, totalAmount: 120, status: "completed", createdAt: new Date("2025-06-10") },
      { userId: 6, totalAmount: 250, status: "completed", createdAt: new Date("2025-08-20") },
      { userId: 3, totalAmount: 300, status: "pending", createdAt: new Date("2025-07-15") },
      { userId: 4, totalAmount: 400, status: "completed", createdAt: new Date("2025-09-01") },
      { userId: 1, totalAmount: 180, status: "completed", createdAt: new Date("2025-09-21") },
      { userId: 3, totalAmount: 700, status: "completed", createdAt: new Date("2025-03-11") },
      { userId: 10, totalAmount: 90, status: "cancelled", createdAt: new Date("2025-01-09") }
    ]
    const order = await Order.insertMany(sampleOrders);


    res.status(201).json({
      success: true,
      message: `${order.length} Orders have been saved`
    })

  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    })
  }
}

const biggestSpender = async (req, res) => {
  try {
    const biggestSpender = await Order.aggregate([
      {
        $match: {
          status: "completed"
        }
      },
      {
        $group: {

          _id: "$userId",
          totalSpent: {
            $sum: "$totalAmount",
          }
        }
      },
      {
        $sort: {
          totalSpent: -1
        }
      },
      {
        $limit: 5
      }
    ])

    res.status(200).json({
      data: biggestSpender
    })

  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: " Some error occured!"
    })
  }
}



module.exports = { saveOrders, biggestSpender };