import { combineReducers } from 'redux-immutable';

import modal from './modules/modal';
import auth from './modules/auth';
import user from './modules/user';


const rootReducer = combineReducers({
    auth,
    user,
    modal
});

export default rootReducer;
