import React from "react";
import c from './LoginPage.module.scss';
import {Button, Checkbox, Form, Input} from 'antd';


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
            <LoginForm onSubmit={submitLogIn} captchaURL={captchaURL}/>
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
