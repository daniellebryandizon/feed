import { LOGIN } from '../actions/_constants';

const { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } = LOGIN;

const initialState = {
    token: null,
    isAuthenticated: false,
    user: null
};

export default (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                token: payload.token,
                isAuthenticated: true
            }

        case LOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem('token');
            return {
                token: null,
                isAuthenticated: false,
                user: null
            }
        default:
            return state;
    }
}