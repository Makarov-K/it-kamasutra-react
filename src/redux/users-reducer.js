let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET_USERS';
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
let SET_TOTAL_USERS = 'SET_TOTAL_USERS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsers: 0,
    currentPage: 1
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
        default:
            return state;
    }
};

export let followAC = (id) => ({type: FOLLOW, id: id});
export let unfollowAC = (id) => ({type: UNFOLLOW, id: id});
export let setUsersAC = (users) => ({type: SET_USERS, users});
export let setCurrentPageAC = (pageNumber) => ({type: SET_CURRENT_PAGE, currentPage: pageNumber});
export let setTotalUsersAC = (totalUsers) => ({type: SET_TOTAL_USERS, totalUsers});

export default usersReducer;