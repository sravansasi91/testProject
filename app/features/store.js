'use strict';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import homePageReducer from '../features/home/reducers/homePage';

const AppReducers = combineReducers({
  homePageReducer
});

const rootReducer = (state, action) => {
  return AppReducers(state, action);
};

let store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
