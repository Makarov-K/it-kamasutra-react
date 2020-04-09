import profileApi from "../DAL/profile-api";

const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'Hi people!', likes: 23},
        {id: 2, message: 'It looks much easier on videos :(', likes: 14}
    ],
    profile: null,
    profileStatus: "",
    isLookingForAJob: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: action.newPostText,
                likes: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
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
        default:
            return state;
    }
};

export let addPost = (newPostText) => ({type: ADD_POST, newPostText});
let setProfile = (profile) => ({type: SET_PROFILE, profile});
let setProfileStatus = (profileStatus) => ({type: SET_PROFILE_STATUS, profileStatus});

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

export default profileReducer;
