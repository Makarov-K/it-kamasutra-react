import authApi from "../DAL/auth-api";
import profileApi from "../DAL/profile-api";
import {stopSubmit} from "redux-form";

let SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
let SET_FETCHING = 'SET_FETCHING';
let SET_AUTH_USER_PROFILE = 'SET_AUTH_USER_PROFILE';

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    authProfile: null,
    isFetching: null,
};

let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data
            };
        case SET_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case SET_AUTH_USER_PROFILE:
            return {
                ...state,
                authProfile: action.authProfile
            };
        default:
            return state;
    }
};

export let setAuthUserData = ({id, login, email}, isAuth) =>
    ({type: SET_AUTH_USER_DATA, data: {id, login, email, isAuth}});
export let setFetching = (isFetching) => ({type: SET_FETCHING, isFetching});
export let setAuthUserProfile = (authProfile) => ({type: SET_AUTH_USER_PROFILE, authProfile});


export const getAuthUserData = () => async (dispatch) => {
    dispatch(setFetching(true));
    let data = await authApi.checkAuth();
    dispatch(setFetching(false));
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(data.data, true));
        let id = data.data.id;
        let profile = await profileApi.requestProfile(id);
        dispatch(setAuthUserProfile(profile));
    } else if (data.resultCode === 1) {
        dispatch(setAuthUserData({id: null, email: null, login: null}, false));
        dispatch(setAuthUserProfile(null));
    }
};
export const login = (loginData) => async (dispatch) => {
    const data = await authApi.login(loginData);
    if (data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else if (data.resultCode === 1) {
        let errorMessage = data.messages.length > 0 ? data.messages[0] : "";
        dispatch(stopSubmit("login", {_error: errorMessage}))
    }
};
export const logout = () => async (dispatch) => {
    let resultCode = await authApi.logout();
    if (resultCode === 0) {
        dispatch(getAuthUserData())
    }
};

export default authReducer;