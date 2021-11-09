import cat_with_tongue from "../images/cat_with_tongue.jpg";
import angry_cat from "../images/angry_cat.webp";
import vsratiy_cat from '../images/vsratiy_cat.jpg';
import doge from '../images/doge.jpg';
import hamster from '../images/hamster.jpg';
import parrot from '../images/parrot.jpg';
import turtle from '../images/turtle.jpg';
import {v1} from "uuid";
import profileReducer from "./reducers/profileReducer";
import dialogsReducer from "./reducers/dialogsReducer";

export const store = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), ava: cat_with_tongue, post: "Кто насрал в мой лоток?", likesCount: 14},
                {id: v1(), ava: angry_cat, post: "Кожанный мешок опять забыл покормить }:(", likesCount: 23},
            ],
            newPostText: ''
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
            newMessageText: ''
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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._subscriber();
    }
}
