import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setFetching,
    setTotalUsers,
    setUsers, toggleFollowingInProgress,
    unfollow
} from "../../redux/users-reducer";
import Preloader from "../Common/Preloader/Preloader";
import usersApi from "../../DAL/users-api";



class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setFetching(true);
        usersApi.getUsers()
            .then(data => {
                this.props.setFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsers(data.totalCount)
            })
    }

    onSetPage = (pageNumber) => {
        this.props.setUsers([]);
        this.props.setFetching(true);
        this.props.setCurrentPage(pageNumber);
        usersApi.getUsers(pageNumber)
            .then(data => {
                this.props.setFetching(false);
                this.props.setUsers(data.items);
            })
    };

    onFollow = (userId) => {
        this.props.toggleFollowingInProgress(true, userId);
        usersApi.followChosenUser(userId)
            .then(resultCode => {
            if (resultCode === 0) {
                this.props.follow(userId);
            }
            this.props.toggleFollowingInProgress(false, userId);
        });
    };

    onUnfollow = (userId) => {
        this.props.toggleFollowingInProgress(true, userId);
       usersApi.unFollowChosenUser(userId)
        .then(resultCode => {
            if(resultCode === 0){
                this.props.unfollow(userId);
            }
            this.props.toggleFollowingInProgress(false, userId);
        })
    };

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    totalUsers={this.props.totalUsers}
                    pageSize={this.props.pageSize}
                    users={this.props.users}
                    follow={this.props.users.follow}
                    unfollow={this.props.users.unfollow}
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
    {follow, setCurrentPage, setFetching, setTotalUsers, setUsers, unfollow, toggleFollowingInProgress})
(UsersContainer);

