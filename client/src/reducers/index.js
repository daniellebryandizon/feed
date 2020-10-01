import { combineReducers } from 'redux';

import alertMessage from './alertMessage';
import login from './login';

export default combineReducers({
    login,
    alertMessage
});