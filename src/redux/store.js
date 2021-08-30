import cat_with_tongue from "../img/cat_with_tongue.jpg";
import angry_cat from "../img/angry_cat.webp";
import vsratiy_cat from '../img/vsratiy_cat.jpg';
import doge from '../img/doge.jpg';
import hamster from '../img/hamster.jpg';
import parrot from '../img/parrot.jpg';
import turtle from '../img/turtle.jpg';
import {v1} from "uuid";
import cat_with_glasses from '../img/cat_with_glasses.jpg';

export const store = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), ava: cat_with_tongue, message: "Кто насрал в мой лоток?", likesCount: 14},
                {id: v1(), ava: angry_cat, message: "Кожанный мешок опять забыл покормить }:(", likesCount: 23},
            ],
            newPost: {
                text: ''
            }
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
            newMessage: {
                text: ''
            }
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
    getState() {
        return this._state;
    },
    setNewPost(text) {
        this._state.profilePage.newPost.text = text;
        this._subscriber();
    },
    addNewPost() {
        this._state.profilePage.posts.unshift({
            id: v1(),
            ava: cat_with_glasses,
            message: this._state.profilePage.newPost.text,
            likesCount: 0
        });
        this._state.profilePage.newPost.text = '';
        this._subscriber();
    },
    setNewMessage(text) {
        this._state.dialogsPage.newMessage.text = text;
        this._subscriber();
    },
    addNewMessage() {
        this._state.dialogsPage.messages.push({id: v1(), message: this._state.dialogsPage.newMessage.text});
        this._state.dialogsPage.newMessage.text = '';
        this._subscriber();
    },
    _subscriber() {
        console.log('State is changed');
    },
    subscribe(observer) {
        this._subscriber = observer;
    }
}
