export const SET_AUTHENTICATED = 'social_network/auth/SET_AUTHENTICATED';
export const SET_INITIALIZED = 'social_network/app/SET_INITIALIZED';
export const SET_EDIT_MODE = 'social_network/app/SET_EDIT_MODE';
export const ADD_NEW_MESSAGE = 'social_network/dialogs/ADD_NEW_MESSAGE';
export const ADD_NEW_POST = 'social_network/profile/ADD_NEW_POST';
export const GET_USER = 'social_network/profile/GET_USER';
export const SET_MY_STATUS = 'social_network/profile/SET_MY_STATUS';
export const SET_MY_PHOTO = 'social_network/profile/SET_MY_PHOTO';
export const FOLLOW = 'social_network/users/FOLLOW';
export const UNFOLLOW = 'social_network/users/UNFOLLOW';
export const SHOW_USERS = 'social_network/users/SHOW_USERS';
export const CHANGE_CURRENT_PAGE = 'social_network/users/CHANGE_CURRENT_PAGE';
export const SET_USERS_TOTAL_COUNT = 'social_network/users/SET_USERS_TOTAL_COUNT';
export const SET_FETCHING = 'social_network/users/SET_FETCHING';
export const SET_FOLLOWING_PROCESS = 'social_network/users/SET_FOLLOWING_PROCESS';


export const setAuthenticated = (userId, login, email, isAuth) => ({
    type: SET_AUTHENTICATED,
    payload: {
        userId,
        login,
        email,
        isAuth
    }
});
export const setInitialized = () => ({
   type: SET_INITIALIZED
});
export const setEdit = (isEdit) => ({
    type: SET_EDIT_MODE,
    isEdit
});
export const addNewMessage = (newMessageText) => ({
    type: ADD_NEW_MESSAGE,
    newMessageText
});
export const addNewPost = (newPostText) => ({
    type: ADD_NEW_POST,
    newPostText
});
export const getUser = (profile) => ({
    type: GET_USER,
    profile
});
export const setMyStatus = (status) => ({
    type: SET_MY_STATUS,
    status
});
export const setMyPhoto = (photos) => ({
    type: SET_MY_PHOTO,
    photos
});
export const follow = (userId) => ({
    type: FOLLOW,
    userId
});
export const unfollow = (userId) => ({
    type: UNFOLLOW,
    userId
});
export const showUsers = (users) => ({
    type: SHOW_USERS,
    users
});
export const changeCurrentPage = (currentPage) => ({
    type: CHANGE_CURRENT_PAGE,
    currentPage
});
export const setUsersTotalCount = (usersTotalCount) => ({
    type: SET_USERS_TOTAL_COUNT,
    usersTotalCount
});
export const setFetching = (isFetching) => ({
    type: SET_FETCHING,
    isFetching
});
export const setFollowingProcess = (isFetching, buttonId) => ({
    type: SET_FOLLOWING_PROCESS,
    isFetching,
    buttonId
});