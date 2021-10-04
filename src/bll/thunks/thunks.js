import {authAPI} from "../../api/api";
import {setAuthUserDataSuccess} from "../action-creators/actionCreators";


export const setAuthUserData = () => {
    return (dispatch) => {
        authAPI
            .getUsersAuth()
            .then(response => {
                if (response.resultCode === 0) {
                    const {id, login, email} = response.data;
                    dispatch(setAuthUserDataSuccess(id, login, email, true));
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