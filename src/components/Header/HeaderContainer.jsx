import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {checkAuth, logout} from "../../redux/auth-reducer";
import {compose} from "redux";


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

export default compose(
    connect(mapStateToProps, {checkAuth, logout})
)(HeaderContainer);

