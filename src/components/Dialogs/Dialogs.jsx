import React from "react";
import c from './Dialogs.module.scss';
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/forms-controls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Button, Form, Input} from 'antd';


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
        <div className={c.dialogsContainer}>
            <div className={c.dialogs}>
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
        onSubmit
    }
) => {
    return (
        <Form onFinish={onSubmit}>
            <Form.Item name={'newMessageText'} rules={[
                {required: true, message: "Field is required!"},
                {max: 50, message: 'Max length of message is 50 symbols!'}
            ]}>
                <Input.TextArea placeholder={'Type new message...'}/>
            </Form.Item>
            <div className={c.buttonContainer}>
                <Button type='primary' htmlType='submit'>
                    Send
                </Button>
            </div>
        </Form>
    )
});

const NewMessageReduxForm = reduxForm({
    form: 'newMessage'
})(NewMessageForm);