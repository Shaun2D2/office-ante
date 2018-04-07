import { combineReducers } from 'redux-immutable';
import auth from './modules/auth';
import user from './modules/user';

const rootReducer = combineReducers({
    auth,
    user
});

export default rootReducer;
