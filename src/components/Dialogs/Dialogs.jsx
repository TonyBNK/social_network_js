import React from "react";
import c from './Dialogs.module.css';
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";

export const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(d => <Dialog id={d.id} name={d.name} ava={d.ava}/>);
    let messagesElements = props.messages.map(m => <Message message={m.message}/>);

    let newMessageText = React.createRef();
    const getText = () => {
        alert(newMessageText.current.value);
        newMessageText.current.value = '';
    }

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={c.messages}>
                {messagesElements}
                <div className={c.newMessage}>
                    <textarea cols="30" rows="10" ref={newMessageText}></textarea>
                    <button onClick={getText}>Send</button>
                </div>
            </div>
        </div>
    );
};