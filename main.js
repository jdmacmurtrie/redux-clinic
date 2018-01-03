import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App.js';
// import sizeAdjust from './reducers/sizeAdjust'
// import { combineReducers, createStore } from 'redux';
// import { Provider } from 'react-redux'

// const store = createStore(sizeAdjust)

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

// <Provider store={store}>
// </Provider>,
