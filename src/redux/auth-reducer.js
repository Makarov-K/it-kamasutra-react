let SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
};

let authReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_AUTH_USER_DATA:
        return {
          ...state,
          id: action.data.id,
          login: action.data.login,
          email: action.data.email,
          isAuth: true
        };
        default:
            return state;
    }
};

export let setAuthUserData = (data) => ({type: SET_AUTH_USER_DATA, data});

export default authReducer;