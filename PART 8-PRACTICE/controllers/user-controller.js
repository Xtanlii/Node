const User = require('../models/user-model');

const saveUsers = async (req, res) => {
  try {
    const sampleUsers = [
      { userId: 1, name: "Stanley", email: "stanley@mail.com", role: "buyer", verified: true, city: "Lagos", lastLogin: new Date("2025-07-01") },
      { userId: 2, name: "Ada", email: "ada@mail.com", role: "seller", verified: false, city: "Abuja", lastLogin: new Date("2022-10-20") },
      { userId: 3, name: "Chidi", email: "chidi@mail.com", role: "buyer", verified: true, city: "Lagos", lastLogin: new Date("2025-09-15") },
      { userId: 4, name: "Grace", email: "grace@mail.com", role: "seller", verified: true, city: "Port Harcourt", lastLogin: new Date("2023-01-02") },
      { userId: 5, name: "Emeka", email: "emeka@mail.com", role: "seller", verified: false, city: "Enugu", lastLogin: new Date("2021-12-11") }
    ]
    const user = await User.insertMany(sampleUsers);


    res.status(201).json({
      success: true,
      message: `${user.length} Users have been saved`
    })

  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    })
  }
}

const UsertotalAmountSpent = async (req, res) => {
  try {
    const userTotal = await User.aggregate([
      {
        $lookup: {
          from: "orders",
          localField: "userId",
          foreignField: "userId",
          as: "orders",
        }
      },
      {
        $addFields: {
          totalOrders: {
            $cond: {
              if: { $gt: [{ $size: "$orders" }, 0] },
              then: { $size: "$orders" },
              else: 0
            }
          },
          totalSpent: {
            $cond: {
              if: { $gt: [{ $size: "$orders" }, 0] },
              then: { $sum: "$orders.totalAmount" },
              else: 0
            }
          }
        }
      },
      {
        $project: {
          _id: 0,
          userId: 1,
          name: 1,
          email: 1,
          totalOrders: 1,
          totalSpent: 1

        }
      }
    ])

    res.status(200).json({
      success: true,
      data: userTotal
    })

  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Some error occured"
    })
  }
}

module.exports = { saveUsers, UsertotalAmountSpent };