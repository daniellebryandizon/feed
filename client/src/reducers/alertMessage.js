import { ALERTS } from '../actions/_constants';

const { SET_ALERT, REMOVE_ALERT } = ALERTS;

const initialState = {
    showAlert: true,
    message: '',
    type: ''
}

export default (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {
        case SET_ALERT:
            return {
                ...state,
                showAlert: true,
                message: payload.message,
                type: payload.type
            };

        case REMOVE_ALERT:
            return {
                ...state,
                showAlert: false,
                message: '',
                type: ''
            }

        default:
            return state;
    }
}