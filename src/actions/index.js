import socket from '../socket';

export function join(room) {
  return (dispatch) => {
    socket.emit('join', room);
  }
}

export function login(name, tagline){
  return (dispatch) => {
    socket.emit('login', {name, tagline});
    dispatch({ type: 'LOGIN_USER', payload: { name, tagline }});
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

export function setChatMessages(messageList){
  return { type: 'MESSAGE_LIST', payload: messageList };
}