import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {follow, requestSpecificUsersPage, requestUsers, unfollow} from "../../redux/users-reducer";
import Preloader from "../Common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsers,
    getUsers
} from "../../selectors/usersSelectors";


class UsersContainer extends React.Component {
    componentDidMount() {
       this.props.requestUsers();
    }

    onSetPage = (pageNumber) => {
        this.props.requestSpecificUsersPage(pageNumber);
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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsers: getTotalUsers(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
};

export default compose(
    connect(mapStateToProps, {requestUsers, requestSpecificUsersPage, follow, unfollow,})
)(UsersContainer);


