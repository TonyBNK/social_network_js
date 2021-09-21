import {v1} from "uuid";
import vsratiy_cat from "../img/vsratiy_cat.jpg";
import doge from "../img/doge.jpg";
import parrot from "../img/parrot.jpg";
import hamster from "../img/hamster.jpg";
import turtle from "../img/turtle.jpg";

const SET_NEW_MESSAGE = 'SET-NEW-MESSAGE';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';

export const setNewMessage = (text) => ({
    type: SET_NEW_MESSAGE,
    message: text
});
export const addNewMessage = () => ({type: ADD_NEW_MESSAGE});

const initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_NEW_MESSAGE:
            return {
                ...state,
                newMessageText: action.message
            };
        case ADD_NEW_MESSAGE:
            return {
                ...state,
                messages: [
                    ...state.messages, {
                    id: v1(),
                    message: state.newMessageText
                }],
                newMessageText: ''
            };
        default:
            return state;
    }
}

export default dialogsReducer;