import { PROFILE } from '../actions/_constants';

const { LOAD_PROFILE } = PROFILE;

const initialState = {
    profileImage: null,
    numOfRecipes: 0,
    numOfFollowers: 0,
    numOfLikes: 0,
    tags: []
};

export default (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {
        case LOAD_PROFILE:
            return {
                ...state,
                profileImage: payload.profileImage,
                numOfRecipes: payload.numOfRecipes,
                numOfFollowers: payload.numOfFollowers,
                numOfLikes: payload.numOfLikes,
                tags: payload.tags
            }
        default:
            return state;
    }
}