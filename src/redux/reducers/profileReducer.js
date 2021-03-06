import {v1} from "uuid";
import cat_with_glasses from "../../images/cat_with_glasses.jpg";
import cat_with_tongue from "../../images/cat_with_tongue.jpg";
import angry_cat from "../../images/angry_cat.webp";
import {
    ADD_NEW_POST,
    GET_USER, SET_MY_PHOTO,
    SET_MY_STATUS
} from "../actions/actions";


const initialState = {
    posts: [
        {
            id: v1(),
            ava: cat_with_tongue,
            name: 'Cat_with_tongue',
            post: "Кто насрал в мой лоток?",
            likesCount: 14
        },
        {
            id: v1(),
            ava: angry_cat,
            name: 'Angry_cat',
            post: "Кожанный мешок опять забыл покормить }:(",
            likesCount: 23
        },
    ],
    profile: null,
    status: '',
    photos: null,
    userId: null
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
        case GET_USER:
            return {
                ...state,
                profile: action.profile
            }
        case SET_MY_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SET_MY_PHOTO:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: action.photos
                }

            }
        default:
            return state;
    }
}