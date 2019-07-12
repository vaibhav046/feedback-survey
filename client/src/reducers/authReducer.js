import { FETCH_USER } from '../actions/types';

const authReducer = function (state = null, action) {
    console.log(action.payload);
    switch (action.type) {
        case FETCH_USER:
            return action.payload || false;
        default:
            return state;
    }
}

export default authReducer;