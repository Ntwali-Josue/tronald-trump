import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import coinsReducers from './coins/coins';

const reducers = combineReducers({
  coins: coinsReducers,
});

const store = createStore(
  reducers,
  applyMiddleware(logger, thunk),
);

export default store;
