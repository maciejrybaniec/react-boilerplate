/**
 * Application main module.
 * @module Application
 * @author maciej.rybaniec@gmail.com
 */

import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo'

import configureStore, { client } from './configureStore';
import App from 'Containers/App';

if (module.hot) {
  module.hot.accept();
}

const store = configureStore();

render(
  <ApolloProvider client={client} store={store} immutable={true}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
