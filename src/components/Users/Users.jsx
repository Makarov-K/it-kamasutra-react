import React from "react";
import style from './Users.module.css';
import User from "./User/User";
import * as axios from "axios";

class Users extends React.Component {

    constructor(props) {
        super(props);

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)})
    };

    render() {
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
                {UsersList}
            </div>
        )
    }
}

export default Users;