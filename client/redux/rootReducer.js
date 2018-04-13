import { combineReducers } from 'redux-immutable';

import modal from './modules/modal';
import auth from './modules/auth';
import user from './modules/user';
import bets from './modules/bets';


export default combineReducers({
    auth,
    user,
    modal,
    bets
});
