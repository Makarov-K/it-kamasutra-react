import React from "react";
import style from './Users.module.css';
import User from "./User/User";
import * as axios from "axios";


class Users extends React.Component {
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

        let pagesQuantity = Math.ceil(this.props.totalUsers / this.props.pageSize);

        let pages = [];

        for (let i = 1; i <= pagesQuantity; i++) {
            pages.push(i);
        }

        let UsersList = this.props.users.map(user => <User
            id={user.id}
            name={user.name}
            photo={user.photos.small}
            status={user.status}
            followed={user.followed}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
        />);
        return (
            <div className={style.users}>
                <div>
                    {pages.map(pageNumber => {
                        return <span
                            className={this.props.currentPage === pageNumber && style.selectedPage}
                            onClick={() => {this.onSetPage(pageNumber)}}>
                            {pageNumber}</span>
                    })}
                </div>
                {UsersList}
            </div>
        )
    }
}

export default Users;