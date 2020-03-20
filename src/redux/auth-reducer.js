let SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
let SET_FETCHING = 'SET_FETCHING';

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    isFetching: null
};

let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        case SET_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        default:
            return state;
    }
};

export let setAuthUserData = (data) => ({type: SET_AUTH_USER_DATA, data});
export let setFetching = (isFetching) => ({type: SET_FETCHING, isFetching});

export default authReducer;