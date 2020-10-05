import { combineReducers } from 'redux';

import alertMessage from './alertMessage';
import login from './login';
import profile from './profile';

export default combineReducers({
    alertMessage,
    login,
    profile
});