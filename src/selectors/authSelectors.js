export const getLogin = (state) => {
  return state.auth.login
};

export const getIsAuth = (state) => {
  return state.auth.isAuth
};

export const getIsFetching = (state) => {
  return state.auth.isFetching
};

export const getAuthProfile = (state) => {
  return state.auth.authProfile
};

export const getAuthId = (state) => {
  return state.auth.id
};