import store from './createStore';
import * as actions from './actions/index';

const socket = require('socket.io-client')('https://socketio-demochat-server.herokuapp.com/');

socket.on('userList', (userList) => {
  store.dispatch(actions.setUserList(userList));
});

socket.on('roomChanged', (user) => {
  store.dispatch(actions.userRoomChange(user));
});

socket.on('newMessage', (message) => {
  store.dispatch(actions.addChatMessageToList(message));
});

export default socket;
