import { combineReducers } from 'redux-immutable';

import modal from './modules/modal';
import auth from './modules/auth';
import user from './modules/user';
import bets from './modules/bets';


const rootReducer = combineReducers({
    auth,
    user,
    modal,
    bets
});

export default rootReducer;
