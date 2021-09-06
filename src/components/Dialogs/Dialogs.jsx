import React from "react";
import c from './Dialogs.module.css';

export const Dialogs = (
    {
        dialogs,
        messages,
        newMessageText,
        setNewMessage,
        addNewMessage
    }
) => {
    const onChangeHandler = (e) => setNewMessage(e.currentTarget.value);

    const onClickHandler = () => addNewMessage(newMessageText);

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogs}
            </div>
            <div className={c.messages}>
                {messages}
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