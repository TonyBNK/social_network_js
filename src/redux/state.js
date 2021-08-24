import cat_with_tongue from "../img/cat_with_tongue.jpg";
import angry_cat from "../img/angry_cat.webp";
import vsratiy_cat from '../img/vsratiy_cat.jpg';
import doge from '../img/doge.jpg';
import hamster from '../img/hamster.jpg';
import parrot from '../img/parrot.jpg';
import turtle from '../img/turtle.jpg';

export let state = {
    profilePage: {
        posts: [
            {id: 1, ava: cat_with_tongue, message: "Кто насрал в мой лоток?", likes: 5},
            {id: 2, ava: angry_cat, message: "Кожанный мешок опять забыл покормить :(", likes: 7},
        ],
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Cat", ava: vsratiy_cat},
            {id: 2, name: "Doge", ava: doge},
            {id: 3, name: "Hamster", ava: hamster},
            {id: 4, name: "Parrot", ava: parrot},
            {id: 5, name: "Turtle", ava: turtle},
        ],
        messages: [
            {id: 1, message: 'So much wow!'},
            {id: 2, message: 'Bark'},
            {id: 3, message: "What's up?"},
        ]
    },
    friendsPage: {
        friends: [
            {id: 1, name: "Cat", ava: vsratiy_cat},
            {id: 2, name: "Doge", ava: doge},
            {id: 3, name: "Hamster", ava: hamster},
            {id: 4, name: "Parrot", ava: parrot},
            {id: 5, name: "Turtle", ava: turtle},
        ]
    }
}