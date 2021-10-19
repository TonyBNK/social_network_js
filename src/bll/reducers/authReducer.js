import {SET_AUTHENTICATED} from "../actions/actions";

const initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTHENTICATED:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}