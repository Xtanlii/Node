const express = require('express');
const app = express();


const logDate = (req, res, next) => {
  const date = new Date()
  console.log(`${req.method} ${req.url} ${date}`);
  checkAuth(req, res, next);
}

const checkAuth = (req, res, next) => {
  const auth = req.query.auth;
  if (auth === "true") {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
}


app.get('/', logDate, (req, res) => {
  res.send('Welcome to Node.js!')

})

app.get('/about', (req, res) => {
  res.send('This is the about page')
})

app.get('/contact', (req, res) => {
  res.send('This is the contact page')
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
})
