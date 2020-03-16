import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalUsersAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsers: state.usersPage.totalUsers,
        currentPage: state.usersPage.currentPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow(id) {dispatch(followAC(id))},
        unfollow(id) {dispatch(unfollowAC(id))},
        setUsers(users) {dispatch(setUsersAC(users))},
        setCurrentPage(pageNumber) {dispatch(setCurrentPageAC(pageNumber))},
        setTotalUsers(totalUsers) {dispatch(setTotalUsersAC(totalUsers))}
    }
};

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;