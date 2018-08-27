import store from './createStore';
import * as actions from './actions/index';
const WS = process.env.REACT_APP_WS;

const socket = require('socket.io-client')(WS);

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
