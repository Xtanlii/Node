const express = require('express');
const app = express();
const fs = require('fs')
const port = 3000;


const users = [
  {
    id: 1,
    name: "User 1",
    age: 19,
    role: "admin"
  },
  {
    id: 2,
    name: "User 2",
    age: 16
  },
  {
    id: 3,
    name: "User 3",
    age: 32
  }
]

const myMiddleware = (req, res, next) => {
  const today = new Date().toISOString();
  console.log("LOGS:", req.method, req.url, today);
  next();
}

app.use(myMiddleware, express.json());

app.get('/users', (req, res) => {
  const { role } = req.query;
  console.log(role);
  if (role) {
    const filteredUsers = users.filter(user => user.role === role);
    res.status(200).json({
      message: "Users with admin roles are displayed successfully",
      data: filteredUsers
    });
  } else {
    res.status(200).json({
      message: "Users are displayed successfully",
      data: users
    });
  }
})

app.get('/users/:id', (req, res) => {
  const { id } = req.query;
  
  if (id) {
    const filteredUsers = users.filter(user => user.id === id);
    res.status(200).json({
      message: `User with id ${id} are displayed successfully`,
      data: filteredUsers
    });
  } else {
    res.status(404).json({
      error: "User not found"
    });
  }
})

app.post('/users', (req, res) => {
  const newUsers = {
    "name": "Stanley",
    "age": 22
  }
  users.push(newUsers);

  fs.appendFileSync('users.txt', `${JSON.stringify(users)}\n`, 'utf8', (err) => {
    if (err) { console.err("Error", err.message) }
    else {
      console.log('File written successfully')
    }
  })
  res.status(200).json({
    message: "User has been added successfully",
    data: users
  })
})

app.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const selectedUser = users.find(user => user.id === id)

  if (selectedUser) {
    selectedUser.age = req.body.age|| selectedUser.age;
    console.log(req.body);

    res.status(200).json({
      message: `age with id ${id} updated successfully`,
      data: selectedUser
    })
  } else {
    res.status(400).json({
      message: "User not found!, try again with a different id"
    })
  }
})

app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const selectedUser = users.findIndex(user => user.id === id)

  if (selectedUser) {
    users.splice(selectedUser, 1);
    res.status(200).json({
      message: `User with id ${id} deleted successfully`,
    })
  } else {
    res.status(400).json({
      message: "User not found!, try again with a different id"
    })
  }
})



app.listen(port, () => console.log(`Server is listening  on port ${port}`));
