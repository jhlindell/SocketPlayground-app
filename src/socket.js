import store from './createStore';
import * as socketActions from './actions/socketActions';
import * as otherActions from './actions/index';

const socket = require('socket.io-client')('localhost:8000', {jsonp: false});

socket.on('joined', (user) => {
  console.log(user.name, ' joined room');
});

socket.on('userList', (userList) => {
  store.dispatch(otherActions.setUserList(userList));
});

socket.on('chatMessages', (messageList) => {
  store.dispatch(otherActions.setChatMessages(messageList));
})

export default socket;
