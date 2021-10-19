import {v1} from "uuid";
import cat_with_glasses from "../../img/cat_with_glasses.jpg";
import cat_with_tongue from "../../img/cat_with_tongue.jpg";
import angry_cat from "../../img/angry_cat.webp";
import {profileAPI} from "../../api/api";


const ADD_NEW_POST = 'ADD-NEW-POST';
const GET_USER_PROFILE = 'GET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';


export const addNewPost = (newPostText) => ({type: ADD_NEW_POST, newPostText});
export const getUser = (profile) => ({
    type: GET_USER_PROFILE,
    profile
});
export const setStatus = (status) => ({
    type: SET_STATUS,
    status
});

export const getUserProfile = (userId = 19542) => {
    return (dispatch) => {
        profileAPI
            .getUsersProfile(userId)
            .then(profile => {
                dispatch(getUser(profile))
            });
    }
}
export const getUserStatus = (userId = 19542) => {
    return (dispatch) => {
        profileAPI
            .getUsersStatus(userId)
            .then(status => {
                dispatch(setStatus(status))
            });
    }
}
export const updateProfileStatus = (newStatus) => {
    return (dispatch) => {
        profileAPI
            .updateStatus(newStatus)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(newStatus))
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
    profile: null,
    status: '',
}

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_NEW_POST: {
            return {
                ...state,
                posts: [
                    {
                        id: v1(),
                        ava: cat_with_glasses,
                        post: action.newPostText,
                        likesCount: 0
                    },
                    ...state.posts
                ]
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