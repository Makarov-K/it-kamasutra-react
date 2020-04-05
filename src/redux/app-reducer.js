import {getAuthUserData} from "./auth-reducer";

const INITIALIZE = 'INITIALIZE';

let initialState = {
    initialized: false
};

let appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
};

let Initialize = () => ({type: INITIALIZE});

export const initializeApp = () => async (dispatch) => {
    await dispatch(getAuthUserData());
    dispatch(Initialize());
};

export default appReducer;