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
export function getUser() {
    return function thunk(dispatch){
        axios.get('/user').then((res) => {
            console.log(res);
        });
    }
}

const initialState = Map({});

export default function(state = initialState, action) {
    switch(action.type) {
      case FETCH:
        return state
      default:
        return state
    }
}
