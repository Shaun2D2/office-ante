import { combineReducers } from 'redux-immutable';
import user from './modules/user';

const rootReducer = combineReducers({
    user
});

export default rootReducer;
