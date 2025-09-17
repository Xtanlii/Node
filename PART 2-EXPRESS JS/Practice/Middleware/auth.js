const express = require('express');
const app = express();

const myMiddleWare = (req, res, next) => {
  const auth = req.query.auth;
  if (auth === "true") {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }

}



app.get('/', (req, res) => {
  res.send('Welcome to Node.js!')

})
app.get('/dashboard', myMiddleWare, (req, res) => {
  res.send('Welcome to Node.js!')

})

app.get('/about', (req, res) => {
  res.send('This is the about page')
})

app.get('/contact', (req, res) => {
  res.send('This is the contact page')
})

// app.get('/api/info', (req,res) => {
//   res.json({
//     name: "NodeApp",
//     version: "1.0.0"
//   })

// })


app.listen(3000, () => {
  console.log('Server is running on port 3000')
});