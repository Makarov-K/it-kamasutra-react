import usersApi from "../DAL/users-api";

let FOLLOWSUCCESS = 'FOLLOWSUCCESS';
let UNFOLLOWSUCCESS = 'UNFOLLOWSUCCESS';
let SET_USERS = 'SET_USERS';
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
let SET_TOTAL_USERS = 'SET_TOTAL_USERS';
let SET_FETCHING = 'SET_FETCHING';
let TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS';


let initialState = {
    users: [],
    pageSize: 10,
    totalUsers: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
    paginatorPortionSize: 10
};

let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOWSUCCESS:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.id) {
                        user.followed = true
                    }
                    return user
                })
            };
        case UNFOLLOWSUCCESS:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.id) {
                        user.followed = false
                    }
                    return user
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_TOTAL_USERS:
            return {
                ...state,
                totalUsers: action.totalUsers
            };
        case SET_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case TOGGLE_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.status
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(userId => userId !== action.userId)
            };
        default:
            return state;
    }
};

let followSuccess = (id) => ({type: FOLLOWSUCCESS, id: id});
let unfollowSuccess = (id) => ({type: UNFOLLOWSUCCESS, id: id});
let setUsers = (users) => ({type: SET_USERS, users});
let setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, currentPage: pageNumber});
let setTotalUsers = (totalUsers) => ({type: SET_TOTAL_USERS, totalUsers});
export let setFetching = (isFetching) => ({type: SET_FETCHING, isFetching});
let toggleFollowingInProgress = (status, userId) => ({type: TOGGLE_FOLLOWING_IN_PROGRESS, status, userId});

export const requestUsers = () => async (dispatch) => {
    dispatch(setFetching(true));
    const data = await usersApi.requestUsers();
    dispatch(setFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsers(data.totalCount));
};
export const requestSpecificUsersPage = (pageNumber) => async (dispatch) => {
    dispatch(setUsers([]));
    dispatch(setFetching(true));
    dispatch(setCurrentPage(pageNumber));
    const data = await usersApi.requestUsers(pageNumber);
    dispatch(setFetching(false));
    dispatch(setUsers(data.items));
};
export const follow = (userId) => async (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId));
    const resultCode = await usersApi.followChosenUser(userId);
    if (resultCode === 0) {
        dispatch(followSuccess(userId));
    }
    dispatch(toggleFollowingInProgress(false, userId));
};
export const unfollow = (userId) => async (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId));
    const resultCode = await usersApi.unFollowChosenUser(userId);
    if (resultCode === 0) {
        dispatch(unfollowSuccess(userId));
    }
    dispatch(toggleFollowingInProgress(false, userId));
};

export default usersReducer;