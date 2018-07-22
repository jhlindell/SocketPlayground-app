import { combineReducers } from 'redux';

function messageReducer(state = [], action){
  switch(action.type){
    case 'ADD_MESSAGE':
      const message = action.payload;
      return [ ...state, message ];

    case 'CLEAR_MESSAGE':
      let stateArray = state;
      let filteredArray = stateArray.filter(message => {
        if(message.id && message.id !== action.payload){
          return message;
        }
        return null;
      });
      return filteredArray;

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

const appReducer = combineReducers({
  messageReducer,
  userReducer,
});

export default appReducer;