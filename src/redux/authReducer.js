import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}

export const setAuthUserDataSuccess = (userId, login, email) =>
    ({type: SET_USER_DATA, data: {userId, login, email}});

export const setAuthUserData = () => {
    return (dispatch) => {
        authAPI.getUsersAuth().then(data => {
            if (data.resultCode === 0) {
                const {id, login, email} = data.data;
                dispatch(setAuthUserDataSuccess(id, login, email));
            }
        });
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
        default:
            return state;
    }
}