import ApolloClient, { createNetworkInterface } from 'apollo-client';
import {
    applyMiddleware,
    createStore,
    combineReducers
} from 'redux';

import config from './config';
import rootReducer from 'Reducers';

export const client = new ApolloClient({
    networkInterface: createNetworkInterface(config.apiURL),
    reduxRootKey: 'apollo'
});

const configureStore = () => {
    return createStore(
        combineReducers({
            apollo: client.reducer(),
            rootReducer
        }),
        applyMiddleware(client.middleware())
    );
};

export default configureStore;
