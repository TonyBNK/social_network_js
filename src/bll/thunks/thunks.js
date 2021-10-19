import {authAPI, profileAPI, usersAPI} from "../../api/api";
import {
    changeCurrentPage, follow, getUser, setInitialized, setAuthenticated,
    setFetching, setFollowingProcess, setMyStatus, setUsersTotalCount,
    showUsers, unfollow
} from "../actions/actions";
import {stopSubmit} from "redux-form";


export const getUserProfile = (userId = 19542) =>
    async (dispatch) => {
        try {
            const profile = await profileAPI.getUserProfile(userId);
            dispatch(getUser(profile));
        } catch (e) {
            console.log(e);
        }
    };
export const getUserStatus = (userId = 19542) =>
    async (dispatch) => {
        try {
            const status = await profileAPI.getUserStatus(userId);
            dispatch(setMyStatus(status));
        } catch (e) {
            console.log(e);
        }
    };
export const updateMyStatus = (newStatus) =>
    async (dispatch) => {
        try {
            const response = await profileAPI.updateMyStatus(newStatus);
            if (response.data.resultCode === 0) {
                dispatch(setMyStatus(newStatus));
            }
        } catch (e) {
            console.log(e);
        }
    };
export const requestUsers = (page = 1, pageSize) =>
    async (dispatch) => {
        try {
            dispatch(setFetching(true));
            dispatch(changeCurrentPage(page));
            const data = await usersAPI.getUsers(page, pageSize);
            dispatch(setFetching(false));
            dispatch(showUsers(data.items));
            dispatch(setUsersTotalCount(data.totalCount));
        } catch (e) {
            console.log(e);
        }
    };
export const followUser = (userId) =>
    async (dispatch) => {
        try {
            dispatch(setFollowingProcess(true, userId));
            const data = await usersAPI.followUser(userId);
            if (data.resultCode === 0) {
                dispatch(follow(userId));
            }
            dispatch(setFollowingProcess(false, userId));
        } catch (e) {
            console.log(e);
        }
    };
export const unfollowUser = (userId) =>
    async (dispatch) => {
        try {
            dispatch(setFollowingProcess(true, userId));
            const data = await usersAPI.unfollowUser(userId);
            if (data.resultCode === 0) {
                dispatch(unfollow(userId));
            }
            dispatch(setFollowingProcess(false, userId));
        } catch (e) {
            console.log(e);
        }
    };
export const setAuthentication = () =>
    async (dispatch) => {
        try {
            const data = await authAPI.me();
            if (data.resultCode === 0) {
                const {id, login, email} = data.data;
                dispatch(setAuthenticated(id, login, email, true));
            }
            return data;
        } catch (e) {
            console.log(e);
        }
    };
export const logIn = (formData) =>
    async (dispatch) => {
        try {
            const data = await authAPI.logIn(formData);
            if (data.resultCode === 0) {
                dispatch(setAuthentication());
            } else {
                const errorMessage = data.messages.length !== 0 ? data.messages[0] : 'Some error!'
                dispatch(stopSubmit('login', {_error: errorMessage}));
            }
        } catch (e) {
            console.log(e);
        }
    };
export const logOut = () =>
    async (dispatch) => {
        try {
            const response = await authAPI.logOut();
            if (response.resultCode === 0) {
                dispatch(setAuthenticated(null, null, null, false));
            }
        } catch (e) {
            console.log(e);
        }
    };
export const initializeApp = () =>
    async (dispatch) => {
        try {
            await dispatch(setAuthentication());
            dispatch(setInitialized());
        } catch (e) {
            console.log(e);
        }
    };