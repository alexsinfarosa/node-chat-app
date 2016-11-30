const path = require('path') // Built in Node module
const http = require('http') // Built in Node module
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app); // For socket.io
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newMessage', {
    from: 'alex@gmail.com',
    text: 'Do not forget',
    createdAt: 123
  });

  socket.on('createMessage', (message) => {
    console.log(message);
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });

});


server.listen(port, () => {
  console.log(`Server is up on port: ${port}`);
})
