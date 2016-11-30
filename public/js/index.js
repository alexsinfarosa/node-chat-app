const socket = io();

socket.on('connect', () => {
  console.log('Connect to the server');

  socket.emit('createMessage', {
    from: 'Alex',
    text: 'Facci quella bella'
  });

});

socket.on('disconnect', () => {
  console.log('Disconnect from server');
});

socket.on('newMessage', (message) => {
  console.log(message);
});
