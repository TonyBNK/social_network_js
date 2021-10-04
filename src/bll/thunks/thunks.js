import {authAPI} from "../../api/api";
import {setAuthUserDataSuccess} from "../action-creators/actionCreators";


export const setAuthUserData = () => {
    debugger
    return (dispatch) => {
        authAPI
            .getUsersAuth()
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
}