import React from "react";
import style from './Users.module.css';
import User from "./User/User";


let Users = (props) => {

    let pagesQuantity = Math.ceil(props.totalUsers / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesQuantity; i++) {
        pages.push(i);
    }

    let UsersList = props.users.map(user => <User
        id={user.id}
        name={user.name}
        photo={user.photos.small}
        status={user.status}
        followed={user.followed}
        onFollow={props.onFollow}
        onUnfollow={props.onUnfollow}
        followingInProgress={props.followingInProgress}
    />);

    return (
        <div className={style.users}>
            <div>
                {pages.map(pageNumber => {
                    return <span className={props.currentPage === pageNumber && style.selectedPage}
                        onClick={() => {props.onSetPage(pageNumber)}}>{pageNumber}</span>})}
            </div>
            {UsersList}
        </div>
    );
};

export default Users;