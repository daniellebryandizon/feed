
import axios from 'axios';
import { setAlert } from './alertMessage';

import { LOGIN } from '../actions/_constants';
const { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } = LOGIN;

export const login = ({ username, password }) => async dispatch => {

    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }

    const body = JSON.stringify({ username, password })

    try {
        const res = await axios.post('/user/login', body, config)
        console.log(res.data)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });

    } catch (error) {

        const errors = error.response.data.message;

        dispatch(setAlert(errors, 'error'));

        dispatch({
            type: LOGIN_FAIL
        });

    }
}

export const logout = () => async dispatch => {
    console.log('hello')
    dispatch({
        type: LOGOUT
    })
}