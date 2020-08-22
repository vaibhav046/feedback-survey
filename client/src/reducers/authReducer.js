import { FETCH_USER, FETCH_USER_SUCCEESS } from '../actions/types';

const authReducer = function (state = null, action) {
    switch (action.type) {
        case FETCH_USER:
            return action.payload || false;
        case FETCH_USER_SUCCEESS:
            return { payload: action.payload, loaded: true }
        default:
            return state;
    }
}

export default authReducer;