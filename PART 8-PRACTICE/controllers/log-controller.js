const Logs = require('../models/logs-model');


const saveLogs = async (req, res) => {
  try {
    const sampleLogs = [
      { message: "User logged in", createdAt: new Date("2025-09-10T10:00:00Z") },
      { message: "Payment failed", createdAt: new Date("2025-09-20T12:30:00Z") },
      { message: "Product added", createdAt: new Date("2025-08-05T09:00:00Z") },
      { message: "Order shipped", createdAt: new Date("2025-07-01T08:00:00Z") }
    ]
    const log = await Logs.insertMany(sampleLogs);
    

    res.status(201).json({
      success: true,
      message: `${Logs.countDocuments()} Logs have been saved`
    })

  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    })
  }
}

module.exports = { saveLogs };