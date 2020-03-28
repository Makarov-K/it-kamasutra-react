import React from "react";
import LoginForm from "./LoginForm"
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";

let Login = (props) => {

    const onSubmit = (formData) => {
      props.login(formData);
    };

    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    )
};

let mapStateToProps = (state) => ({

});
export default connect(mapStateToProps,{login})(Login);
