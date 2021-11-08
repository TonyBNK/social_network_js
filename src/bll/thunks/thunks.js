import {
    authAPI,
    followAPI,
    profileAPI,
    securityAPI,
    usersAPI
} from "../../api/api";
import {
    changeCurrentPage, follow, getUser, setInitialized, setAuthenticated,
    setFetching, setFollowingProcess, setMyStatus, setUsersTotalCount,
    showUsers, unfollow, setMyPhoto, setEdit, getCaptcha
} from "../actions/actions";
import {stopSubmit} from "redux-form";
import {followUnfollowFlow} from "../../utils/utils";


export const getUserProfile = (userId) =>
    async (dispatch) => {
        try {
            const profile = await profileAPI.getUserProfile(userId);
            dispatch(getUser(profile));
        } catch (e) {
            console.log(e);
        }
    };
export const getUserStatus = (userId) =>
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
export const updateMyPhoto = (newPhoto) =>
    async (dispatch) => {
        try {
            const response = await profileAPI.updateMyPhoto(newPhoto);
            if (response.data.resultCode === 0) {
                dispatch(setMyPhoto(response.data.data.photos));
            }
        } catch (e) {
            console.log(e);
        }
    };
export const saveProfile = (profile) =>
    async (dispatch, getState) => {
        try {
            const formData = {
                contacts: {}
            };
            const properties = Object.getOwnPropertyNames(profile);
            properties.forEach(propName => {
                propName.includes('contacts.')
                    ? formData.contacts[propName.slice(9)] = profile[propName]
                    : formData[propName] = profile[propName];
            });
            const response = await profileAPI.saveProfile(formData);
            if (response.data.resultCode === 0) {
                dispatch(getUserProfile(getState().auth.userId));
                dispatch(setEditMode(false));
            } else {
                const errorMessage = response.data.messages.length !== 0 ? response.data.messages[0] : 'Some error!'
                dispatch(stopSubmit('profileDescription', {_error: errorMessage}));
            }
        } catch (e) {
            console.log(e);
        }
    };
export const setEditMode = (isEdit) =>
    async (dispatch) => {
        try {
            dispatch(setEdit(isEdit));
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
        const apiMethod = followAPI.followUser.bind(usersAPI);
        followUnfollowFlow(dispatch, userId, apiMethod, follow);
    };
export const unfollowUser = (userId) =>
    async (dispatch) => {
        const apiMethod = followAPI.unfollowUser.bind(usersAPI);
        followUnfollowFlow(dispatch, userId, apiMethod, unfollow);
    };
export const setAuthentication = () =>
    async (dispatch) => {
        try {
            const data = await authAPI.me();
            if (data.resultCode === 0) {
                const {id, login, email} = data.data;
                dispatch(setAuthenticated(id, login, email, true));
            } //Todo: return data maybe
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
                if (data.resultCode === 10) {
                    const response = await securityAPI.getCaptchaURL();
                    dispatch(getCaptcha(response.url));
                }
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
                dispatch(getCaptcha(null));
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