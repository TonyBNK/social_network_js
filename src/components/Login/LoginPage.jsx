import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import c from './LoginPage.module.scss';
import {Button, Form, Input, Checkbox} from 'antd';


const maxLength30 = maxLengthCreator(30);

export const LoginPage = (
    {
        captchaURL,
        logIn
    }
) => {
    const submitLogIn = (formData) => {
        logIn(formData)
    }

    return (
        <div className={c.loginContainer}>
            <div className={c.titleContainer}>
                Sign In
            </div>
            <LoginReduxForm onSubmit={submitLogIn} captchaURL={captchaURL}/>
        </div>
    )
}

const LoginForm = React.memo((
    {
        onSubmit,
        captchaURL
    }
) => {
    return (
        <Form onFinish={onSubmit}>
            <Form.Item name='login' rules={[
                {required: true, message: "Login is required!"},
                {max: 30, message: 'Max length of login is 30 symbols!'}
            ]}>
                <Input placeholder='Login'/>
            </Form.Item>
            <Form.Item name='password' rules={[
                {required: true, message: "Password is required!"},
                {max: 30, message: 'Max length of password is 30 symbols!'}
            ]}>
                <Input type='password' placeholder='Password'/>
            </Form.Item>
            <Form.Item name='rememberMe' label='Remember me'>
                <Checkbox/>
            </Form.Item>
            {
                captchaURL && <div className={c.captchaContainer}>
                    <img src={captchaURL} alt="captcha"/>
                    <Form.Item name='captcha' rules={[
                        {required: true, message: "Captcha is required!"}
                    ]}>
                        <Input type='captcha' placeholder='Captcha'/>
                    </Form.Item>
                </div>
            }
            <div className={c.buttonContainer}>
                <Button type='primary' htmlType='submit'>Login</Button>
            </div>
        </Form>
    )
});

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);
