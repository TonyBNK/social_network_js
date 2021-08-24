import React from "react";
import c from './Dialogs.module.css';
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";

export const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <Dialog id={d.id} name={d.name} ava={d.ava}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>);

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={c.messages}>
                {messagesElements}
            </div>
        </div>
    );
};