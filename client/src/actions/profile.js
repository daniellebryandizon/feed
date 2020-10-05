import axios from 'axios';
import { PROFILE, NOT_FOUND } from './_constants';

const { LOAD_PROFILE } = PROFILE;

export const loadProfile = ({ username }) => async dispatch => {

    try {
        
        const res = await axios.get(`/profile/${username}`);

        dispatch({
            type: LOAD_PROFILE,
            payload: res.data
        });

    } catch (error) {
        console.log(error.message);

        dispatch({
            type: NOT_FOUND
        })
    }
}