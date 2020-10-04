import { LOGIN } from '../actions/_constants';

const { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, USER_LOADED } = LOGIN;

const initialState = {
    isAuthenticated: false,
    user: null
};

export default (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                token: payload.accessToken,
                isAuthenticated: true
            }

        case LOGIN_FAIL:
        case LOGOUT:
            return {
                isAuthenticated: false,
                user: null
            }

        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                user: payload

            }
        default:
            return state;
    }
}