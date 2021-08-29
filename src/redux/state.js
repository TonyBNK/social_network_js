import cat_with_tongue from "../img/cat_with_tongue.jpg";
import angry_cat from "../img/angry_cat.webp";
import vsratiy_cat from '../img/vsratiy_cat.jpg';
import doge from '../img/doge.jpg';
import hamster from '../img/hamster.jpg';
import parrot from '../img/parrot.jpg';
import turtle from '../img/turtle.jpg';
import {v1} from "uuid";
import cat_with_glasses from '../img/cat_with_glasses.jpg';

let rerenderEntireTree = () => {
    console.log('State is changed');
}

export const data = {
    profilePage: {
        posts: [
            {id: v1(), ava: cat_with_tongue, message: "Кто насрал в мой лоток?", likesCount: 14},
            {id: v1(), ava: angry_cat, message: "Кожанный мешок опять забыл покормить }:(", likesCount: 23},
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
}

window.state = data;

export const updatePostText = (text) => {
    data.profilePage.newPostText = text;
    rerenderEntireTree(data)
}

export const addPostText = () => {
    data.profilePage.posts.unshift({id: v1(), ava: cat_with_glasses, message: data.profilePage.newPostText, likesCount: 0});
    data.profilePage.newPostText = '';
    rerenderEntireTree(data);
}

export const updateMessageText = (text) => {
    data.dialogsPage.newMessageText = text;
    rerenderEntireTree(data);
}

export const addMessageText = () => {
    data.dialogsPage.messages.push({id: v1(), message: data.dialogsPage.newMessageText});
    data.dialogsPage.newMessageText = '';
    rerenderEntireTree(data);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}
