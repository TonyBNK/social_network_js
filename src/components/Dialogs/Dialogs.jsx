import React from "react";
import c from './Dialogs.module.css';
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {Field, reduxForm} from "redux-form";

export const Dialogs = (
    {
        dialogs,
        messages,
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
    const submitAddNewMessage = (values) => {
        addNewMessage(values.newMessageText);
    }

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogsList}
            </div>
            <div className={c.messages}>
                {messagesList}
                <NewMessageReduxForm onSubmit={submitAddNewMessage}/>
            </div>
        </div>
    );
};

const NewMessageForm = (
    {
        handleSubmit
    }
) => {
    return (
        <form
            className={c.newMessage}
            onSubmit={handleSubmit}
        >
            <Field
                component={'textarea'}
                type={'text'}
                name={'newMessageText'}
                placeholder={'Type new message...'}
            />
            <button>
                Send
            </button>
        </form>
    )
}

const NewMessageReduxForm = reduxForm({
    form: 'newMessage'
})(NewMessageForm);