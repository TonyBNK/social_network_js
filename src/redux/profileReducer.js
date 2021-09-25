import {v1} from "uuid";
import cat_with_glasses from "../img/cat_with_glasses.jpg";
import cat_with_tongue from "../img/cat_with_tongue.jpg";
import angry_cat from "../img/angry_cat.webp";
import {profileAPI} from "../api/api";

const SET_NEW_POST = 'SET-NEW-POST';
const ADD_NEW_POST = 'ADD-NEW-POST';
const GET_USER_PROFILE = 'GET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';


export const setNewPost = (text) => ({
    type: SET_NEW_POST,
    postText: text
});
export const addNewPost = () => ({type: ADD_NEW_POST});
const getUserProfileSuccess = (profile) => ({
    type: GET_USER_PROFILE,
    profile
});
const setStatusSuccess = (status) => ({
    type: SET_STATUS,
    status
});

export const getUserProfile = (userId = 19542) => {
    return (dispatch) => {
        profileAPI
            .getUsersProfile(userId)
            .then(profile => {
                dispatch(getUserProfileSuccess(profile))
            });
    }
}
export const getUserStatus = (userId = 19542) => {
    return (dispatch) => {
        profileAPI
            .getUsersStatus(userId)
            .then(status => {
                dispatch(setStatusSuccess(status))
            });
    }
}
export const updateProfileStatus = (newStatus) => {
    return (dispatch) => {
        profileAPI
            .updateStatus(newStatus)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatusSuccess(newStatus))
                }
            })
    }
}

const initialState = {
    posts: [
        {
            id: v1(),
            ava: cat_with_tongue,
            post: "Кто насрал в мой лоток?",
            likesCount: 14
        },
        {
            id: v1(),
            ava: angry_cat,
            post: "Кожанный мешок опять забыл покормить }:(",
            likesCount: 23
        },
    ],
    newPostText: '',
    profile: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_NEW_POST:
            return {
                ...state,
                newPostText: action.postText
            };
        case ADD_NEW_POST: {
            return {
                ...state,
                posts: [
                    {
                        id: v1(),
                        ava: cat_with_glasses,
                        post: state.newPostText,
                        likesCount: 0
                    },
                    ...state.posts
                ],
                newPostText: ''
            };
        }
        case GET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export default profileReducer;