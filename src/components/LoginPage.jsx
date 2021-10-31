import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "./common/forms-controls/FormsControls";
import {maxLengthCreator, required} from "../utils/validators/validators";
import c from './LoginPage.module.scss';


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
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={submitLogIn} captchaURL={captchaURL}/>
        </div>
    )
}

const LoginForm = React.memo((
    {
        handleSubmit,
        error,
        captchaURL
    }
) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    component={Input}
                    type={'text'}
                    placeholder={'Login'}
                    name={'login'}
                    validate={[required, maxLength30]}
                />
            </div>
            <div>
                <Field
                    component={Input}
                    type={'password'}
                    placeholder={'Password'}
                    name={'password'}
                    validate={[required, maxLength30]}
                />
            </div>
            {
                error && <div className={c.errorMessage}>
                    {error}
                </div>
            }
            <div>
                <Field
                    component={'input'}
                    type={'checkbox'}
                    name={'rememberMe'}
                /> remember me
            </div>
            {
                captchaURL && <div>
                    <img src={captchaURL} alt="captcha"/>
                    <Field
                        component={Input}
                        type={'captcha'}
                        placeholder={'Captcha'}
                        name={'captcha'}
                        validate={[required]}
                    />
                </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
});

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);
