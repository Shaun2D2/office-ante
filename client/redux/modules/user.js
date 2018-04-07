import { Map } from 'immutable';

/**
 * actions
 *
 */
const USER_LOGIN = 'USER_LOGIN';
const USER_LOGOUT = 'USER_LOGOUT';

/**
 * user login thunk
 *
 */
export const userLogin = (dispatch, action) => {
    return function thunk() {
        return dispatch({ type: USER_LOGIN, data: { name: 'tom' } });
    }
}

const initialState = Map({});

export default function(state = initialState, action) {
    switch(action.type) {
        case USER_LOGIN:
            state = action.data
          break;
        default:
          return state;
    }
}
