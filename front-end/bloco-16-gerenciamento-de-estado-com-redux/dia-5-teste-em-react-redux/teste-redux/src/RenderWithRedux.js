import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { createStore, combineReducers  } from 'redux';
import clickReducer from './redux/reducers/reducer'; // nome do reducer na pasta reducer

const renderWithRedux = (
  componet,
  { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {}) => {
  return {
    ...render(<Provider store={store}>{componet}</Provider>),
    store
  }
}

export default renderWithRedux;