import { FETCH_SURVEY } from '../actions/types';

const dataReducer = function (state = null, action) {
    switch (action.type) {
        case FETCH_SURVEY: {
            return action.payload || false;
        }
        default:
            return state;
    }
}

export default dataReducer;