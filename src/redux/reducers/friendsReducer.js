import {v1} from "uuid";
import vsratiy_cat from "../../images/vsratiy_cat.jpg";
import doge from "../../images/doge.jpg";
import parrot from "../../images/parrot.jpg";
import hamster from "../../images/hamster.jpg";
import turtle from "../../images/turtle.jpg";


const initialState = {
    friends: [
        {id: v1(), name: "Cat", ava: vsratiy_cat},
        {id: v1(), name: "Doge", ava: doge},
        {id: v1(), name: "Parrot", ava: parrot},
        {id: v1(), name: "Hamster", ava: hamster},
        {id: v1(), name: "Turtle", ava: turtle},
    ]
};

export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}