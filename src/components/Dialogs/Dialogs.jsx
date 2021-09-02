import React, {useState} from "react";
import c from './Dialogs.module.css';
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";

export const Dialogs = (props) => {

    let dialogsElements = props.dialogsPageState.dialogs.map(d => <Dialog id={d.id} name={d.name} ava={d.ava}/>);
    let messagesElements = props.dialogsPageState.messages.map(m => <Message message={m.message}/>);

    const onChangeHandler = (e) => {
        //props.setNewMessage(e.currentTarget.value);
        let action = {type: 'SET-NEW-MESSAGE', text: e.currentTarget.value};
        props.dispatch(action)
    }

    const onClickHandler = () => {
        //props.addNewMessage(props.dialogsPageState.newMessage);
        props.dispatch({type: 'ADD-NEW-MESSAGE'})
    }

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={c.messages}>
                {messagesElements}
                <div className={c.newMessage}>
                    <textarea value={props.dialogsPageState.newMessage}
                              onChange={onChangeHandler}/>
                    <button onClick={onClickHandler}>Send</button>
                </div>
            </div>
        </div>
    );
};