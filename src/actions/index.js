import socket from '../socket';

export function join(room) {
  return (dispatch) => {
    socket.emit('join', room);
  }
}

export function addMessageToContainer(message){
  const timeStamp = new Date().toString();
  const id = message + timeStamp;
  const messageObject = { message, id };
  return {type: 'ADD_MESSAGE', payload: messageObject};
}

export function clearMessage(id){
  return { type: 'CLEAR_MESSAGE', payload: id };
}

export function login(name, tagline){
  return { type: 'LOGIN_USER', payload: { name, tagline }};
}

export function logout(){
  return { type: 'LOGOUT_USER' };
}

