import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setFetching,
    setTotalUsers,
    setUsers,
    unfollow
} from "../../redux/users-reducer";
import * as axios from "axios";
import Preloader from "../Common/Preloader/Preloader";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.setFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsers(response.data.totalCount)
            })
    }

    onSetPage = (pageNumber) => {
        this.props.setUsers([]);
        this.props.setFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
            .then(response => {
                this.props.setFetching(false);
                this.props.setUsers(response.data.items);
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
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    currentPage={this.props.currentPage}
                    onSetPage={this.onSetPage}
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
        isFetching: state.usersPage.isFetching
    }
};


export default connect(mapStateToProps,
    {follow, setCurrentPage, setFetching, setTotalUsers, setUsers, unfollow})
(UsersContainer);

