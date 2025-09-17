const express = require('express');

const app = express();

app.get('/', (req,res) => {
 res.send(`
  <h1>Hello</h1>
  <button>Click Me</button>
  
  
  `); 
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is now running at port ${port}`);
})

