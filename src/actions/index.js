import socket from '../socket';

export function join(room) {
  return () => {
    socket.emit('join', room);
  }
}

export function login(name, tagline){
  return (dispatch) => {
    socket.emit('login', {name, tagline});
    dispatch({ type: 'LOGIN_USER', payload: { name, tagline, room: 0 }});
  }
}

export function logout(){
  return (dispatch) => {
    socket.emit('logout');
    dispatch({ type: 'LOGOUT_USER' });
  }
}

export function setUserList(userList){
  return { type: 'SET_USER_LIST', payload: userList };
}

export function addChatMessageToList(message){
  return { type: 'NEW_MESSAGE', payload: message };
}

export function postNewMessage(message){
  return () => {
    socket.emit('message', message);
  }
}

export function changeRoom(roomNumber){
  return (dispatch) => {
    socket.emit('changeRoom', roomNumber);
    dispatch({ type: 'CLEAR_MESSAGES' });
  }
}

export function userRoomChange(user){
  return { type: 'ROOM_CHANGE', payload: user };
}

export function spam(){
  return () => {
    socket.emit('spam');
  }
}

export function setUpPrivateMessage(username){
  return { type: 'OPEN_PRIVATE_MESSAGE', payload: username };
}

export function closePrivateMessage(){
  return { type: 'CLOSE_PRIVATE_MESSAGE' };
}

export function sendPrivateMessage(username, message){
  return (dispatch) => {
    socket.emit('privateMessage', { username, message });
    dispatch({ type: 'CLOSE_PRIVATE_MESSAGE' });
  }
}