import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalUsersAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import * as axios from "axios";


class UsersContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsers(response.data.totalCount)
            })
    }

    onSetPage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    };

    render() {
        return (
            <Users
            totalUsers={this.props.totalUsers}
            pageSize={this.props.pageSize}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            currentPage={this.props.currentPage}
            onSetPage={this.onSetPage}
            />
        )
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

