import {v1} from "uuid";
import cat_with_glasses from "../img/cat_with_glasses.jpg";
import cat_with_tongue from "../img/cat_with_tongue.jpg";
import angry_cat from "../img/angry_cat.webp";

const SET_NEW_POST = 'SET-NEW-POST';
const ADD_NEW_POST = 'ADD-NEW-POST';

export const setNewPostActionCreator = (text) => ({type: SET_NEW_POST, postText: text});
export const addNewPostActionCreator = () => ({type: ADD_NEW_POST});

const initialState = {
    posts: [
        {id: v1(), ava: cat_with_tongue, post: "Кто насрал в мой лоток?", likesCount: 14},
        {id: v1(), ava: angry_cat, post: "Кожанный мешок опять забыл покормить }:(", likesCount: 23},
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_NEW_POST:
            state.newPostText = action.postText;
            return state;
        case ADD_NEW_POST:
            state.posts.unshift({
                id: v1(),
                ava: cat_with_glasses,
                post: state.newPostText,
                likesCount: 0
            });
            state.newPostText = '';
            return state;
        default:
            return state;
    }
}

export default profileReducer;