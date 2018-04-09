import { Map } from 'immutable';
import axios from 'axios';

/**
 * actions
 *
 */
const FETCH = 'User/Fetch';

/**
 * thunks
 *
 */
export function fetchUser() {
    return function thunk(dispatch, getState){
        const config = {
          headers: {
            authorization: `bearer ${getState().getIn(['auth', 'token'])}`
          }
        }

        return axios.get('/api/user', config).then((res) => {
          dispatch({ type: FETCH, data: res.data });
        });
    }
}

const initialState = Map({});

export default function(state = initialState, action) {
    switch(action.type) {
      case FETCH:
        return Map(action.data);
      default:
        return state
    }
}
