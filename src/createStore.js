import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
// import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

const middleWare = [
  thunk, 
  // logger
]

const createStoreWithMiddleware = applyMiddleware(...middleWare)(createStore);
const store = createStoreWithMiddleware(reducers);

export default store;