import {v1} from "uuid";
import vsratiy_cat from "../../images/vsratiy_cat.jpg";
import doge from "../../images/doge.jpg";
import parrot from "../../images/parrot.jpg";
import hamster from "../../images/hamster.jpg";
import turtle from "../../images/turtle.jpg";
import {ADD_NEW_MESSAGE} from "../actions/actions";


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
    ]
};

export const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_NEW_MESSAGE:
            return {
                ...state,
                messages: [
                    ...state.messages, {
                        id: v1(),
                        message: action.newMessageText
                    }]
            };
        default:
            return state;
    }
}