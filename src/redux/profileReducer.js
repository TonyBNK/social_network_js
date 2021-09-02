import {v1} from "uuid";
import cat_with_glasses from "../img/cat_with_glasses.jpg";

const SET_NEW_POST = 'SET-NEW-POST';
const ADD_NEW_POST = 'ADD-NEW-POST';

export const setNewPostActionCreator = (text) => ({type: SET_NEW_POST, post: text});
export const addNewPostActionCreator = () => ({type: ADD_NEW_POST});

const profileReducer = (state, action) => {

    switch (action.type) {
        case SET_NEW_POST:
            state.newPostText = action.post;
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