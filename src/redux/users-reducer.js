let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET_USERS';

let initialState = {
    users: []
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
                users: [...state.users, ...action.users]
            };
        default:
            return state;
    }
};

export let followAC = (id) => ({type: FOLLOW, id: id});
export let unfollowAC = (id) => ({type: UNFOLLOW, id: id});
export let setUsersAC = (users) => ({type: SET_USERS, users});
export default usersReducer;