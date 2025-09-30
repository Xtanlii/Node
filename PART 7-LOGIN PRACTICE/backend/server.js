require('dotenv').config();
const express = require('express');
const connectDB = require('./database/db');
const authRoute = require('./routes/auth-routes');

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

//middleware
app.use(express.json());
app.use('/api/auth', authRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})