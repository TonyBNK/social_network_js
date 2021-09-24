import React from "react";
import c from './Dialogs.module.css';
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const Dialogs = (
    {
        dialogs,
        messages,
        newMessageText,
        setNewMessage,
        addNewMessage
    }
) => {
    const dialogsList = dialogs.map(d =>
        <Dialog
            id={d.id}
            name={d.name}
            ava={d.ava}
        />
    );
    const messagesList = messages.map(m =>
        <Message
            id={m.id}
            message={m.message}
        />
    );

    const onChangeHandler = (e) => setNewMessage(e.currentTarget.value);

    const onClickHandler = () => addNewMessage(newMessageText);

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogsList}
            </div>
            <div className={c.messages}>
                {messagesList}
                <div className={c.newMessage}>
                    <textarea
                        value={newMessageText}
                        onChange={onChangeHandler}
                        placeholder={'Enter your message'}
                    />
                    <button onClick={onClickHandler}>
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default withAuthRedirect(Dialogs);