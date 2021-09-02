import cat_with_tongue from "../img/cat_with_tongue.jpg";
import angry_cat from "../img/angry_cat.webp";
import vsratiy_cat from '../img/vsratiy_cat.jpg';
import doge from '../img/doge.jpg';
import hamster from '../img/hamster.jpg';
import parrot from '../img/parrot.jpg';
import turtle from '../img/turtle.jpg';
import {v1} from "uuid";
import cat_with_glasses from '../img/cat_with_glasses.jpg';

const SET_NEW_POST = 'SET-NEW-POST';
const ADD_NEW_POST = 'ADD-NEW-POST';
const SET_NEW_MESSAGE = 'SET-NEW-MESSAGE';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';

export const setNewPostActionCreator = (text) => ({type: SET_NEW_POST, post: text});
export const addNewPostActionCreator = () => ({type: ADD_NEW_POST});
export const setNewMessageActionCreator = (text) => ({type: SET_NEW_MESSAGE, message: text});
export const addNewMessageActionCreator = () => ({type: ADD_NEW_MESSAGE});

export const store = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), ava: cat_with_tongue, post: "Кто насрал в мой лоток?", likesCount: 14},
                {id: v1(), ava: angry_cat, post: "Кожанный мешок опять забыл покормить }:(", likesCount: 23},
            ],
            newPost: ''
        },
        dialogsPage: {
            dialogs: [
                {id: v1(), name: "Cat", ava: vsratiy_cat},
                {id: v1(), name: "Doge", ava: doge},
                {id: v1(), name: "Parrot", ava: parrot},
                {id: v1(), name: "Hamster", ava: hamster},
                {id: v1(), name: "Turtle", ava: turtle},
            ],
            messages: [
                {id: v1(), message: 'So much wow!'},
                {id: v1(), message: 'Bark'},
                {id: v1(), message: "What's up?"},
            ],
            newMessage: ''
        },
        friendsPage: {
            friends: [
                {id: v1(), name: "Cat", ava: vsratiy_cat},
                {id: v1(), name: "Doge", ava: doge},
                {id: v1(), name: "Parrot", ava: parrot},
                {id: v1(), name: "Hamster", ava: hamster},
                {id: v1(), name: "Turtle", ava: turtle},
            ]
        }
    },
    _subscriber() {
        console.log('State is changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._subscriber = observer;
    },
    dispatch(action) {
        if (action.type === SET_NEW_POST) {
            this._state.profilePage.newPost = action.post;
            this._subscriber();
        } else if (action.type === ADD_NEW_POST) {
            this._state.profilePage.posts.unshift({
                id: v1(),
                ava: cat_with_glasses,
                post: this._state.profilePage.newPost,
                likesCount: 0
            });
            this._state.profilePage.newPost = '';
            this._subscriber();
        } else if (action.type === SET_NEW_MESSAGE) {
            this._state.dialogsPage.newMessage = action.message;
            this._subscriber();
        } else if (action.type === ADD_NEW_MESSAGE) {
            this._state.dialogsPage.messages.push({id: v1(), message: this._state.dialogsPage.newMessage});
            this._state.dialogsPage.newMessage = '';
            this._subscriber();
        }
    }
}
