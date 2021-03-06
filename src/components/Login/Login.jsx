import React from "react";
import LoginForm from "./LoginForm"
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {getAuthId, getIsAuth} from "../../selectors/authSelectors";

const Login = (props) => {

    const onSubmit = (formData) => {
      props.login(formData);
    };

    if(props.isAuth) return <Redirect to={`/profile/${props.authId}`}/>;
    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
};

let mapStateToProps = (state) => ({
    isAuth: getIsAuth(state),
    authId: getAuthId(state),
    captchaUrl: state.auth.captchaUrl
});
export default connect(mapStateToProps,{login})(Login);
