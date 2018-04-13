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
            /**
             * set token for axios requests
             *
             */
            axios.defaults.headers.common['Authorization'] = `bearer ${res.data.token}`;

            /**
             * set token to local store
             *
             */
            localStorage.setItem('user', res.data.token);

            /**
             * dispatch success
             *
             */
            dispatch({ type: LOGIN, data: Map(res.data) });
        })
        .catch((err) => console.log(err));
    }
}

const initialState = localStorage.getItem('user') ? Map({ token: localStorage.getItem('user') }) : Map({});

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
