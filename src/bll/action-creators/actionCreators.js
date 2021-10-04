export const SET_USER_DATA = 'SET_USER_DATA';

export const setAuthUserDataSuccess = (userId, login, email, isAuth) => ({
    type: SET_USER_DATA,
    payload: {
        userId, login, email, isAuth
    }
});