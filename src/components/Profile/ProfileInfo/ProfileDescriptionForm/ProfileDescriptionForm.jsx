import React from "react";
import {Field, reduxForm} from "redux-form";
import c from "./ProfileDescriptionForm.module.scss";
import {Form, Button, Checkbox, Input} from 'antd';


const ProfileDescriptionForm = (
    {
        onSubmit,
        initialValues
    }
) => {
    return (
        <Form onFinish={onSubmit} size='small' className={c.form}
              initialValues={initialValues}>
            <Form.Item label="Full name" name="fullName"
                       rules={[{
                           required: true,
                           message: 'Please input your full name!'
                       }]}>
                <Input/>
            </Form.Item>
            <Form.Item label="About me" name="aboutMe">
                <Input.TextArea/>
            </Form.Item>
            <Form.Item label="Looking for a job" name="lookingForAJob">
                <Checkbox checked={initialValues.lookingForAJob}/>
            </Form.Item>
            <Form.Item label="Description" name="lookingForAJobDescription">
                <Input.TextArea/>
            </Form.Item>
            {
                Object.keys(initialValues.contacts).map(key => {
                        return <Form.Item
                            label={key}
                            key={key}
                            name={`contacts.${key}`}
                        >
                            <Input/>
                        </Form.Item>
                    }
                )
            }
            <div>
                <button>Save</button>
            </div>
        </Form>
    )
}

export default reduxForm({form: 'profileDescription'})(ProfileDescriptionForm);
