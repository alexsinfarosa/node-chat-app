const socket = io();

socket.on('connect', () => {
  console.log('Connected to server');
});

// socket.emit('createMessage', {
//   from: 'Alex',
//   text: 'Hi'
// }, (data) => {
//   console.log(data);
// });

// socket.on('newMessage', (message) => {
//   console.log(message);
// });

socket.on('disconnect', () => {
  console.log('Disconnect from server');
});

// VUE
new Vue ({
  el: '#app',
  data: {
    messages: [],
    message: ''
  },
  methods: {

    createMessage () {
      if (this.message != "") {
        socket.emit('createMessage', {
        from: 'Alex',
        text: this.message
        }, (data) => {
          // console.log('createMessage', data);
        })
      }
      this.message = '';
    }

  },

  created () {
    socket.on('newMessage', (message) => {
      console.log(message);
      this.messages.push(message);
    });
  }

});
