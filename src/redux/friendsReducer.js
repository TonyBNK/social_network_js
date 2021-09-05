import {v1} from "uuid";
import vsratiy_cat from "../img/vsratiy_cat.jpg";
import doge from "../img/doge.jpg";
import parrot from "../img/parrot.jpg";
import hamster from "../img/hamster.jpg";
import turtle from "../img/turtle.jpg";


const initialState = {
    friends: [
        {id: v1(), name: "Cat", ava: vsratiy_cat},
        {id: v1(), name: "Doge", ava: doge},
        {id: v1(), name: "Parrot", ava: parrot},
        {id: v1(), name: "Hamster", ava: hamster},
        {id: v1(), name: "Turtle", ava: turtle},
    ]
};

const friendsReducer = (state = initialState, action) => {
    return state;
}

export default friendsReducer;