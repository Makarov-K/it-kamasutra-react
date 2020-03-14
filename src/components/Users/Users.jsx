import React from "react";
import style from './Users.module.css';
import User from "./User/User";

let Users = (props) => {

    let UsersList = props.users.map(user => <User
        id={user.id}
        ava={user.ava}
        name={user.name}
        age={user.age}
        city={user.city}
        country={user.country}
        status={user.status}
        followed={user.followed}
        follow={props.follow}
        setUsers={props.setUsers}
    />);

    return (
        <div className={style.users}>
            {UsersList}
        </div>
    )
};

export default Users;