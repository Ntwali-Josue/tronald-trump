import { createStore, combineReducers, applymiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import quotesReducer from './reducers/quotes';

const reducer = combineReducers({
  quotes: quotesReducer,
});

const store = createStore(
  reducer,
  applymiddleware(thunk, logger),
);

export default store;
