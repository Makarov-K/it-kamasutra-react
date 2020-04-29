import profileApi from "../DAL/profile-api";
import {reset, stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';
const PUT_NEW_AVATAR_SUCCESS = 'PUT_NEW_AVATAR_SUCCESS';
const SET_PROFILE_INFO_EDIT_MODE = 'SET_PROFILE_INFO_EDIT_MODE';

let initialState = {
    posts: [
        {id: 1, message: 'Hi people!', likes: 23},
        {id: 2, message: 'It looks much easier on videos :(', likes: 14}
    ],
    profile: null,
    profileStatus: "",
    isLookingForAJob: null,
    profileInfoEditMode: false
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let postKey = state.posts.length + 1;
            let newPost = {
                id: postKey,
                message: action.newPostText,
                likes: 0
            };
            return {
                ...state,
                posts: [newPost, ...state.posts]
            };
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_PROFILE_STATUS:
            return {
                ...state,
                profileStatus: action.profileStatus
            };
        case PUT_NEW_AVATAR_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            };
        case SET_PROFILE_INFO_EDIT_MODE:
            return {
                ...state,
                profileInfoEditMode: action.bool
            };
        default:
            return state;
    }
};

export let addPost = (newPostText) => (dispatch) => {
    dispatch({type: ADD_POST, newPostText});
    dispatch(reset('addPost'));
};
let setProfile = (profile) => ({type: SET_PROFILE, profile});
let setProfileStatus = (profileStatus) => ({type: SET_PROFILE_STATUS, profileStatus});
const putNewAvatarSuccess = (photos) => ({type: PUT_NEW_AVATAR_SUCCESS, photos});
export const setProfileInfoEditMode = (bool) => ({type: SET_PROFILE_INFO_EDIT_MODE, bool});

export const requestProfile = (userId) => async (dispatch) => {
    dispatch(setProfile(null));
    const profile = await profileApi.requestProfile(userId);
    dispatch(setProfile(profile));
};
export const requestProfileStatus = (userId) => async (dispatch) => {
    dispatch(setProfileStatus(""));
    const profileStatus = await profileApi.requestProfileStatus(userId);
    dispatch(setProfileStatus(profileStatus));
};
export const updateProfileStatus = (newStatus) => async (dispatch) => {
    const resultCode = await profileApi.updateProfileStatus(newStatus);
    if (resultCode === 0) {
        dispatch(setProfileStatus(newStatus))
    }
};
export const putNewAvatar = (newAvatar) => async (dispatch) => {
    const response = await profileApi.putNewAvatar(newAvatar);
    if (response.data.data.resultCode === 0) {
        dispatch(putNewAvatarSuccess(response.data.data.photos))
    }
};
export const saveProfileInfoChanges = (profileInfoData) => async (dispatch, getState) => {
    const response = await profileApi.saveProfileInfoChanges(profileInfoData);
    let profileId = getState().auth.id;
    if (response.data.resultCode === 0) {
        dispatch(setProfileInfoEditMode(false));
        dispatch(requestProfile(profileId));
    }
    if (response.data.resultCode === 1) {
        let errorMessage = response.data.messages[0].toLowerCase();
        let erroredContact;
        for(let contact in profileInfoData.contacts){
            if(errorMessage.includes(contact)){
                erroredContact = contact;
            }
        }
        dispatch(stopSubmit("EditProfileInfoForm", {"contacts": {[erroredContact]: errorMessage}}));
    }
};

export default profileReducer;
