
import axios from 'axios';
import { setAlert } from './alertMessage';

import { LOGIN } from '../actions/_constants';
const { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, USER_LOADED } = LOGIN;

export const login = ({ username, password }) => async dispatch => {

    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }

    const body = JSON.stringify({ username, password })

    try {

        const res = await axios.post('/user/login', body, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });

        dispatch(loadUser());

    } catch (error) {

        const errors = error.response.data.message;

        dispatch(setAlert(errors, 'error'));

        dispatch({
            type: LOGIN_FAIL
        });

    }
}

export const loadUser = () => async dispatch => {

    const res = await axios.get('/user');

    dispatch({
        type: USER_LOADED,
        payload: res.data
    })
}

export const logout = () => async dispatch => {
    console.log('hello')
    dispatch({
        type: LOGOUT
    })
}