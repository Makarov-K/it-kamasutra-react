let FOLLOW = 'FOLLOW';

let initialState = {
    users: [
        {
            id: 1, followed: 'Unfollow',
            ava: 'https://avatars.mds.yandex.net/get-pdb/1996997/859e3f3f-1d94-44a7-9210-d6adbed4fcf8/s1200',
            name: 'Kir', age: 27, city: 'Vitebsk', country: 'Belarus', status: 'Learn React-Redux & Computer science'
        },
        {
            id: 2, followed: 'Follow',
            ava: 'https://avatars.mds.yandex.net/get-pdb/1985244/f794a42c-6f8f-462e-8cd9-fcce1278face/s1200',
            name: 'Leo', age: 4, city: 'Vitebsk', country: 'Belarus', status: 'food?!'
        },
    ]
};

let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (action.id === user.id) {
                        if (user.followed === 'Follow') {
                            return {...user, followed: 'Unfollow'};
                        }
                        return {...user, followed: 'Follow'}
                    }
                    return user;
                })
            };
        default:
            return state;
    }
};

export let followAC = (id) => ({type: FOLLOW, id: id});
export default usersReducer;