const express = require('express');
const app = express();



app.get('/error', (req, res, next) => {
  try {
    throw new Error
  } catch (err) {
    next(err)
  }
})

app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).send('Something went wrong!');
})

app.get('/', (req, res) => {
  res.send('Welcome to Node.js!');
})

app.get('/about', (req, res) => {
  res.send('This is the about page')
})

app.get('/contact', (req, res) => {
  res.send('This is the contact page')
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
});