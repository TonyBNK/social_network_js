import {v1} from "uuid";
import cat_with_glasses from "../img/cat_with_glasses.jpg";
import cat_with_tongue from "../img/cat_with_tongue.jpg";
import angry_cat from "../img/angry_cat.webp";
import {profileAPI} from "../api/api";

const SET_NEW_POST = 'SET-NEW-POST';
const ADD_NEW_POST = 'ADD-NEW-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

export const setNewPost = (text) => ({
    type: SET_NEW_POST,
    postText: text
});
export const addNewPost = () => ({type: ADD_NEW_POST});
export const setUserProfileSuccess = (profile) => ({type: SET_USER_PROFILE, profile});

export const setUserProfile = (userProfileId) => {
    return (dispatch) => {
        profileAPI.getUsersProfile(userProfileId).then(data => dispatch(setUserProfileSuccess(data)));
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
    profile: null
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_NEW_POST:
            return {
                ...state,
                newPostText: action.postText
            };
        case ADD_NEW_POST: {
            return {...state,
                posts: [
                    {id: v1(), ava: cat_with_glasses, post: state.newPostText, likesCount: 0},
                    ...state.posts
                ],
                newPostText: ''
            };
        }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }
}

export default profileReducer;