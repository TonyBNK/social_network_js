export const SET_USER_DATA = 'SET_USER_DATA';
export const SET_INITIALIZED = 'SET_INITIALIZED';

export const setAuthUserDataSuccess = (userId, login, email, isAuth) => ({
    type: SET_USER_DATA,
    payload: {
        userId,
        login,
        email,
        isAuth
    }
});

export const initializedSuccess = () => ({
   type: SET_INITIALIZED
});