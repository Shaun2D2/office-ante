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
        axios.get('/user').then(() => {
            console.log('test');
        });
    }
}

const initialState = Map({});

export default function(state = initialState, action) {
    switch(action.type) {
      case LOAD_USER:
        return state
      default:
        return state
    }
}
