import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData, setAuthUserProfile, setFetching} from "../../redux/auth-reducer";
import authApi from "../../DAL/auth-api";
import profileApi from "../../DAL/profile-api";


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.setFetching(true);
        authApi.checkAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.setAuthUserData(data.data);
                    this.props.setFetching(false);
                    let id = data.data.id;
                    profileApi.getProfile(id)
                        .then(profile => {
                            this.props.setAuthUserProfile(profile)
                        })
                }
            });
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

export default connect(mapStateToProps, {setAuthUserData, setFetching, setAuthUserProfile})
(HeaderContainer);