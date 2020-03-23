import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {follow, getSpecificUsersPage, getUsers, unfollow} from "../../redux/users-reducer";
import Preloader from "../Common/Preloader/Preloader";


class UsersContainer extends React.Component {
    componentDidMount() {
       this.props.getUsers();
    }

    onSetPage = (pageNumber) => {
        this.props.getSpecificUsersPage(pageNumber);
    };

    onFollow = (userId) => {
        this.props.follow(userId);
    };

    onUnfollow = (userId) => {
        this.props.unfollow(userId);
    };

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    totalUsers={this.props.totalUsers}
                    pageSize={this.props.pageSize}
                    users={this.props.users}
                    currentPage={this.props.currentPage}
                    onSetPage={this.onSetPage}
                    onFollow={this.onFollow}
                    onUnfollow={this.onUnfollow}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsers: state.usersPage.totalUsers,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};


export default connect(mapStateToProps,
    {getUsers, getSpecificUsersPage, follow, unfollow,})(UsersContainer);

