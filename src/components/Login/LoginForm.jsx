import React from "react";
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {Input} from "../Common/FormsControls/FormsControls";
import style from "../Common/FormsControls/FormsControls.module.css";

let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={props.error && style.wholeFormError}>
                <div>
                    <Field placeholder={"Login"} name={"email"} component={Input} validate={[required]}/>
                </div>
                <div>
                    <Field placeholder={"Password"} name={"password"} component={Input}
                           type={"password"} validate={[required]}/>
                </div>
                <div>
                    <Field component={"input"} name={"rememberMe"} type={"checkbox"}/>
                    <label>Remember me</label>
                </div>
                <div className={style.wholeFormErrorText}>
                    {props.error}
                </div>
                <div>
                    <button>Login</button>
                </div>
            </div>
        </form>
    )
};

LoginForm = reduxForm({form: 'login'})(LoginForm);
export default LoginForm;