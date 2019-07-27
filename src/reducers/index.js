import { combineReducers } from 'redux';
import userReducer from './userReducer';
import utilReducer from './utilReducer';

export default combineReducers({
    users: userReducer,
    utils: utilReducer
});