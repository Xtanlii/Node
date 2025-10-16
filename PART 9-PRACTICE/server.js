const express = require('express');
const app = express();
const socketIo = require('socket.io');
const http = require('http');


const server = http.createServer(app);

//initialize socket and attach to http server
const io = socketIo(server)
app.use(express.static('public'))
const users = new Set();


io.on("connection", (socket) => {
  socket.on('join', (newUser) => {
    
    users.add(newUser);
    socket.newUser = newUser;
    //sends a new  user to all the clients
    io.emit('userJoined', newUser);
    //sends new user list
    io.emit('userList', Array.from(users));
  });

  //chat message
  socket.on('newMessage', (message) => {
    io.emit('newMessage', message)
  })

  socket.on('disconnect', () => {
    users.forEach(user => {
      if (user === socket.newUser) {
        users.delete(user);

        io.emit('userLeft', user);
        io.emit('userList', Array.from(users));
      }
    })
  })
  
})


const PORT = 3000
server.listen(PORT, () => {
  console.log(`Server is listening  on PORT ${PORT}`)
})