import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {followAC} from "../../redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow(id) {dispatch(followAC(id))}
    }
};

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;