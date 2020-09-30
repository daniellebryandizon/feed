import { ALERTS } from './_constants';

const { SET_ALERT, REMOVE_ALERT } = ALERTS;

export const setAlert = (message, type) => async dispatch => {

    try {
        dispatch({
            type: SET_ALERT,
            payload: {
                message,
                type
            }
        })
    } catch (error) {
        console.log(error.message);
    }
}

export const removeAlert = () => async dispatch => {

    try {
        dispatch({
            type: REMOVE_ALERT
        })
    } catch (error) {
        console.log(error.message);
    }
}