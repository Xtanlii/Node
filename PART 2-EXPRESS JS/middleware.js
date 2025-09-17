const express= require('express');
const app = express();

//define middleware function
const myFirstMiddleware = (req, res,next) => {
  console.log('this first middleware will run on every request');

  next();
}

app.use(myFirstMiddleware);

app.get('/', (req, res) => {
  res.send('home page')
});

app.get('/about', (req, res) => {
  res.send('about page')
});

app.listen(3000, () => {
  console.log('Server is now running on port 3000');
})