require('dotenv');

const express = require('express');
const connectToDB = require('./database/db.js');
const router = require('./routes/routes.js');

const app = express();

const PORT = process.env.PORT || 3000;

connectToDB();
app.use(express.json());
app.use('/api/products', router);




app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
})
