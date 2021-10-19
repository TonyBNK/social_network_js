import React from "react";
import c from './Dialogs.module.css';
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/forms-controls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";


const maxLength50 = maxLengthCreator(50);

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

const NewMessageForm = React.memo((
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
                component={Textarea}
                name={'newMessageText'}
                placeholder={'Type new message...'}
                validate={[required, maxLength50]}
            />
            <button>
                Send
            </button>
        </form>
    )
});

const NewMessageReduxForm = reduxForm({
    form: 'newMessage'
})(NewMessageForm);