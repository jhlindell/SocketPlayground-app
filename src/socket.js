// import store from './createStore';

const socket = require('socket.io-client')('localhost:8000', {jsonp: false});

socket.on('joined', (room) => {
  console.log(`joined room ${room}`);
})

export default socket;
