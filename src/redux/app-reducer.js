import {checkAuth} from "./auth-reducer";

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

let setInitialize = () => ({type: INITIALIZE});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(checkAuth());
    Promise.all([promise])
        .then(() => {
            dispatch(setInitialize());
        })
};

export default appReducer;