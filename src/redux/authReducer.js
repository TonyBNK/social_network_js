import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';

const initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}

const setAuthUserDataSuccess = (userId, login, email) => ({
    type: SET_USER_DATA,
    data: {
        userId, login, email
    }
});
const logInSuccess = (userId) => ({
    type: LOG_IN,
    userId
});
const logOutSuccess = () => ({
    type: LOG_OUT
});

export const setAuthUserData = () => {
    return (dispatch) => {
        authAPI
            .getUsersAuth()
            .then(response => {
                if (response.resultCode === 0) {
                    const {id, login, email} = response.data;
                    dispatch(setAuthUserDataSuccess(id, login, email));
                }
            });
    }
};
export const logIn = (formData) => {
    return (dispatch) => {
        const {login: email, password, rememberMe} = formData;

        authAPI
            .logUserIn(email, password, rememberMe)
            .then(response => {
                if (response.resultCode === 0) {
                    const userId = response.data.userId;
                    dispatch(logInSuccess(userId));
                }
            })
    }
};
export const logOut = () => {
    return (dispatch) => {
        authAPI
            .logUserOut()
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(logOutSuccess());
                }
            })
    }
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case LOG_IN:
            return {
                ...state,
                isAuth: true,
                userId: action.userId
            }
        case LOG_OUT:
            return {
                ...state,
                isAuth: false
            }
        default:
            return state;
    }
}