import React from "react";
import {Field, reduxForm} from "redux-form";

export const LoginPage = (
    {
        logIn
    }
) => {
    const submit = (formData) => {
        logIn(formData)

    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={submit}/>
        </div>
    )
}

const LoginForm = (
    {
        handleSubmit
    }
) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    component={'input'}
                    type={'text'}
                    placeholder={'Login'}
                    name={'login'}
                />
            </div>
            <div>
                <Field
                    component={'input'}
                    type={'text'}
                    placeholder={'Password'}
                    name={'password'}
                />
            </div>
            <div>
                <Field
                    component={'input'}
                    type={'checkbox'}
                    name={'rememberMe'}
                /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)