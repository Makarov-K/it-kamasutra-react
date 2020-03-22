let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET_USERS';
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
let SET_TOTAL_USERS = 'SET_TOTAL_USERS';
let SET_FETCHING = 'SET_FETCHING';
let TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS';


let initialState = {
    users: [],
    pageSize: 5,
    totalUsers: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (action.id === user.id) {
                        user.followed = true;
                    }
                    return user;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (action.id === user.id) {
                        user.followed = false;
                    }
                    return user;
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
                    : state.followingInProgress.filter(userId => userId != action.userId)
            };
        default:
            return state;
    }
};

export let follow = (id) => ({type: FOLLOW, id: id});
export let unfollow = (id) => ({type: UNFOLLOW, id: id});
export let setUsers = (users) => ({type: SET_USERS, users});
export let setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, currentPage: pageNumber});
export let setTotalUsers = (totalUsers) => ({type: SET_TOTAL_USERS, totalUsers});
export let setFetching = (isFetching) => ({type: SET_FETCHING, isFetching});
export let toggleFollowingInProgress = (status, userId) => ({type: TOGGLE_FOLLOWING_IN_PROGRESS, status, userId});

export default usersReducer;