const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const validUser = { username: 'John', password: '1234' };

  const success = (username === validUser.username && password === validUser.password);
  const logEntry = `[${new Date().toISOString()}] user=${username} password=${password} success= ${success}\n`;

  fs.appendFile('logs.txt', logEntry, (err) => {
    if (err) console.log('Error:', err.message) 
  })


  if (success) {
    res.json({
      message: "login successful",
      token: "1234"
    })
  } else {
    res.status(401).json({
      message: "login failed"
    })
  }

})



app.listen(port, () => {
  console.log(`Server is now running at port ${port}`);
})