import { combineReducers } from 'redux'
import * as types from 'Constants/ActionTypes';

const initialState = {
    users: [],
    filter: ''
};

function availableUsers(state = initialState.users, action) {
    switch (action.type) {
        case types.ADD_USER:
            const usek = state.concat([action.user]);
            return usek;
            break;
        default:
            return state;
    }
}

function usersFilter(state = initialState.filter, action) {
    return state;
}

export default combineReducers({
  availableUsers,
  usersFilter
});
