import { Map } from 'immutable';
import axios from 'axios';

/**
 * actions
 *
 */
const LOGIN = 'Auth/Login';
const LOGOUT = 'Auth/Logout';

/**
 * user login thunk
 *
 */
export const authLogin = (payload) => {
    return function thunk(dispatch) {
        return axios.post('/api/login', payload).then((res) => {
            dispatch({ type: LOGIN, data: Map(res.data) });
        })
        .catch((err) => console.log(err));
    }
}

const initialState = Map({});

export default function(state = initialState, action) {
    switch(action.type) {
        case LOGIN:
          return action.data;
          break;
        case LOGOUT:
          return initialState
        default:
          return state;
    }
}
