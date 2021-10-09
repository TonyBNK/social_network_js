import {authAPI} from "../../api/api";
import {
    initializedSuccess,
    setAuthUserDataSuccess
} from "../action-creators/actionCreators";
import {stopSubmit} from "redux-form";


export const setAuthUserData = () => {
    return (dispatch) => {
        return authAPI
            .me()
            .then(data => {
                if (data.resultCode === 0) {
                    const {id, login, email} = data.data;
                    dispatch(setAuthUserDataSuccess(id, login, email, true));
                }
            });
    }
};
export const logIn = (formData) => {
    return (dispatch) => {
        authAPI
            .logUserIn(formData)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData());
                } else {
                    const errorMessage = data.messages.length !== 0 ? data.messages[0] : 'Some error!'
                    dispatch(stopSubmit('login', {_error: errorMessage}));
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
                    dispatch(setAuthUserDataSuccess(null, null, null, false));
                }
            })
    }
};
export const initializeApp = () => {
    return (dispatch) => {
        dispatch(setAuthUserData())
            .then(() => {
                dispatch(initializedSuccess());
            })
    }
};