import React from "react";
import {
    addNewMessageActionCreator,
    setNewMessageActionCreator
} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText
});

const mapDispatchToProps = (dispatch) => ({
    setNewMessage: (text) => {
        dispatch(setNewMessageActionCreator(text));
    },
    addNewMessage: () => {
        dispatch(addNewMessageActionCreator());
    }
});

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);