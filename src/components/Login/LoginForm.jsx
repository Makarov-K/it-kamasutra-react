import React from "react";
import {Field, reduxForm} from "redux-form";
import {compose} from "redux";

let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={"input"}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={"input"}/>
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} type={"checkbox"}/>
                <label>Remember me</label>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

export default compose(
    reduxForm({form: "login"})
)(LoginForm);