import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
};

let withAuthRedirect = (Component) => {
    const withAuthRedirectContainer = (props) => {
        if (!props.isAuth) {
            return <Redirect to='/login'/>
        }
        return <Component {...props}/>
    };

    return connect(mapStateToProps)(withAuthRedirectContainer);
};


export default withAuthRedirect;