import {v1} from "uuid";
import vsratiy_cat from "../../img/vsratiy_cat.jpg";
import doge from "../../img/doge.jpg";
import parrot from "../../img/parrot.jpg";
import hamster from "../../img/hamster.jpg";
import turtle from "../../img/turtle.jpg";
import dialogsReducer, {addNewMessage} from "./dialogsReducer";

let initialState;

beforeEach(() => {
    initialState = {
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
        isAuth: false
    };
});

test('new message should be added', () => {
    let newState = dialogsReducer(initialState, addNewMessage('Hello there!'));

    expect(newState.messages.length).toBe(4);
    expect(newState.messages[3].message).toBe('Hello there!');
});