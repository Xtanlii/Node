const express = require('express');
const app = express();
const socketIo = require('socket.io');
const http = require('http');


const server = http.createServer(app);

//initialize socket and attach to http server
const io = socketIo(server)
app.use(express.static('public'))


io.on("connection", (socket) => {
  socket.emit
})


const PORT = 3000
server.listen(PORT, () => {
  `Server is listening  on PORT ${PORT}`
})