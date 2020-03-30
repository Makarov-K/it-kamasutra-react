import React from "react";
import LoginForm from "./LoginForm"
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

let Login = (props) => {

    const onSubmit = (formData) => {
      props.login(formData);
    };

    if(props.isAuth) return <Redirect to={`/profile/${props.authId}`}/>;
    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    )
};

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    authId: state.auth.id
});
export default connect(mapStateToProps,{login})(Login);
