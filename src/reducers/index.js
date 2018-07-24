import { combineReducers } from 'redux';

function messageReducer(state=[], action){
  switch(action.type){
    case 'MESSAGE_LIST':
      return action.payload;
    
    default:
      return state;
  }
}

function userReducer(state=null, action){
  switch(action.type){
    case 'LOGIN_USER':
      return action.payload;

    case 'LOGOUT_USER':
      return null;

    default:
      return state;
  }
}

function userListReducer(state=null, action){
  switch(action.type){
    case 'SET_USER_LIST':
      return action.payload;
    
      default:
        return state;
  }
}

const appReducer = combineReducers({
  messageReducer,
  userReducer,
  userListReducer,
});

export default appReducer;