import {v1} from "uuid";
const SET_NEW_MESSAGE = 'SET-NEW-MESSAGE';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';

export const setNewMessageActionCreator = (text) => ({type: SET_NEW_MESSAGE, message: text});
export const addNewMessageActionCreator = () => ({type: ADD_NEW_MESSAGE});

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case SET_NEW_MESSAGE:
            state.newMessageText = action.message;
            return state;
        case ADD_NEW_MESSAGE:
            state.messages.push({id: v1(), message: state.newMessageText});
            state.newMessageText = '';
            return state;
        default:
            return state;
    }
}

export default dialogsReducer;