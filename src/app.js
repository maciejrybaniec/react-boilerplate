/**
 * Application main module.
 * @module Application
 * @author maciej.rybaniec@gmail.com
 */

import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

import App from 'Containers/App';
import reducer from 'Reducers';

if (module.hot) {
  module.hot.accept();
}

const store = createStore(reducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
