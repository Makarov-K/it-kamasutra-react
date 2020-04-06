import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import {compose} from "redux";
import {getAuthProfile, getIsAuth, getIsFetching, getLogin} from "../../selectors/authSelectors";

const HeaderContainer = (props) => {
    return (
        <Header {...props}/>
    )
};

let mapStateToProps = (state) => {
    return {
        login: getLogin(state),
        isAuth: getIsAuth(state),
        isFetching: getIsFetching(state),
        authProfile: getAuthProfile(state)
    }
};

export default compose(
    connect(mapStateToProps, {logout})
)(HeaderContainer);

