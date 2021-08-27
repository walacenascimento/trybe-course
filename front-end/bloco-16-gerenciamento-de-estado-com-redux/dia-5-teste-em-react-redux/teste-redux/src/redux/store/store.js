import { createStore, combineReducers } from 'redux';
import clickReducer from '../reducers/reducer';

const rootReducer = combineReducers({ clickReducer });

const store = createStore(rootReducer);

export default store;