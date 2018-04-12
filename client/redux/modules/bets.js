import { Map } from 'immutable';
import axios from 'axios';

/**
 * actions
 *
 */
const FETCH = 'Bet/Fetch';
const CREATE = 'Bet/Create';

/**
 * fetch user bets thunk
 *
 */
export const fetchUserBets = () => {
    return function thunk(dispatch, getState) {
        return axios.get('/api/user/bets')
            .then((res) => dispatch({ type: FETCH, data: Map(res.data) }))
            .catch((err) => console.log(err));
    }
}

const initialState = Map({});

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH:
          return action.data;
          break;
        case CREATE:
          return action.data;
        default:
          return state;
    }
}
