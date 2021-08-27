import cat_with_tongue from "../img/cat_with_tongue.jpg";
import angry_cat from "../img/angry_cat.webp";
import vsratiy_cat from '../img/vsratiy_cat.jpg';
import doge from '../img/doge.jpg';
import hamster from '../img/hamster.jpg';
import parrot from '../img/parrot.jpg';
import turtle from '../img/turtle.jpg';
import {v1} from "uuid";
import cat_with_glasses from '../img/cat_with_glasses.jpg';

export const data = {
    profilePage: {
        posts: [
            {id: v1(), ava: cat_with_tongue, message: "Кто насрал в мой лоток?", likesCount: 14},
            {id: v1(), ava: angry_cat, message: "Кожанный мешок опять забыл покормить }:(", likesCount: 23},
        ]
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
        ]
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

export const addPost = (postMessage) => {
    return data.profilePage.posts.unshift({id: v1(), ava: cat_with_glasses, message: postMessage, likesCount: 0});
}

