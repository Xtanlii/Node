const express = require('express');
const app = express();

app.get('/', (req,res) => {
  res.send('Welcome to Node.js!')

}).listen(3000, () => console.log('Server running on port 3000'))

app.get('/about', (req,res) => {
  res.send('This is the about page')
})

app.get('/contact', (req,res) => {
  res.send('This is the contact page')
})

app.get('/api/info', (req,res) => {
  res.json({
    name: "NodeApp",
    version: "1.0.0"
  })

})
