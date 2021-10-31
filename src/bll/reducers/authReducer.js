import {GET_CAPTCHA_URL, SET_AUTHENTICATED} from "../actions/actions";

const initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    captchaURL: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTHENTICATED:
            return {
                ...state,
                ...action.payload
            }
        case GET_CAPTCHA_URL:
            return {
                ...state,
                captchaURL: action.captchaURL
            }
        default:
            return state;
    }
}