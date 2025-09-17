const express = require('express');
const app = express();

const myMiddleWare = (req, res, next) => {
  console.log(req.method, req.url);
  next();
}

app.use(myMiddleWare);

app.get('/', (req,res) => {
  res.send('Welcome to Node.js!')

})

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


app.listen(3000, () => {
  console.log('Server is running on port 3000')
});