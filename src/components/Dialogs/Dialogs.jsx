import React, {useState} from "react";
import c from './Dialogs.module.css';
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";

export const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.getState().dialogsPage.dialogs.map(d => <Dialog id={d.id} name={d.name} ava={d.ava}/>);
    let messagesElements = props.dialogsPage.getState().dialogsPage.messages.map(m => <Message message={m.message}/>);

    let newMessageText = React.createRef();

    const onChangeHandler = (e) => {
        props.dialogsPage.setNewMessage(e.currentTarget.value);
    }

    const onClickHandler = () => {
        props.dialogsPage.addNewMessage(newMessageText.current.value);
    }

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={c.messages}>
                {messagesElements}
                <div className={c.newMessage}>
                    <textarea ref={newMessageText}
                              value={props.dialogsPage.getState().dialogsPage.newMessage.text}
                              onChange={onChangeHandler}/>
                    <button onClick={onClickHandler}>Send</button>
                </div>
            </div>
        </div>
    );
};