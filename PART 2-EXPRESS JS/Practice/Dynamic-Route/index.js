const express = require('express');
const app = express();


app.get('/user/:id', (req, res) => {
  const id = parseInt(req.params.id)
  
  res.send(`User ID is ${id}`)
})

app.get('/greet/:name', (req, res) => {
  const name = (req.params.name)
  
  res.send(`Hello ${name}!`)
})


app.get('/product/:category/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const category = req.params.category
  
  res.json({
    category: category,
    id: id
  })
})

app.listen(3000, ()=> console.log('Server is running on port 3000'));