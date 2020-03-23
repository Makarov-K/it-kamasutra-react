import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {checkAuth, setAuthUserData, setAuthUserProfile, setFetching} from "../../redux/auth-reducer";
import authApi from "../../DAL/auth-api";
import profileApi from "../../DAL/profile-api";


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.checkAuth();
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
        isFetching: state.auth.isFetching,
        authProfile: state.auth.authProfile
    }
};

export default connect(mapStateToProps, {checkAuth})
(HeaderContainer);