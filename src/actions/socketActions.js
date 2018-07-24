import socket from '../socket';

export function postMessage(message){
  return (dispatch) => {
    socket.emit('message', message);
  }
}