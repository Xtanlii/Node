require('dotenv').config();
const express = require('express');
const connectDB = require('./database/db');
const authRoute = require('./routes/auth-routes');
const homeRoute = require('./routes/home-routes');
const uploadRoute = require('./routes/upload-routes');

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

//middleware
app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api', homeRoute);
app.use('/api', uploadRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})