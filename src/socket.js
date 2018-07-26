import store from './createStore';
import * as otherActions from './actions/index';

const socket = require('socket.io-client')('localhost:8000', {jsonp: false});

socket.on('userList', (userList) => {
  store.dispatch(otherActions.setUserList(userList));
});

socket.on('roomChanged', (user) => {
  store.dispatch(otherActions.userRoomChange(user));
});

socket.on('newMessage', (message) => {
  store.dispatch(otherActions.addChatMessage(message));
})

export default socket;
