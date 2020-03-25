import profileApi from "../DAL/profile-api";

const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'Hi people!', likes: 23},
        {id: 2, message: 'It looks much easier on videos :(', likes: 14}
    ],
    newPostText: '',
    profile: null,
    profileStatus: null,
    isLookingForAJob: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newPostText
            };
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newPostText,
                likes: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
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

export let changeNewPostTextCreator = (text) => ({type: CHANGE_NEW_POST_TEXT, newPostText: text});
export let addPostCreator = () => ({type: ADD_POST});
let setProfile = (profile) => ({type: SET_PROFILE, profile});
let setProfileStatus = (profileStatus) => ({type: SET_PROFILE_STATUS, profileStatus});

export const getProfile = (userId) => (dispatch) => {
      profileApi.getProfile(userId)
          .then(profile => {
              dispatch(setProfile(profile));
          })
};
export const getProfileStatus = (userId) => (dispatch) => {
  profileApi.getProfileStatus(userId)
      .then(profileStatus => {
          dispatch(setProfileStatus(profileStatus));
      })
};

export default profileReducer;
