import React from "react";
import style from './Users.module.css';
import User from "./User/User";
import Paginator from "../Common/Paginator/Paginator";
import Preloader from "../Common/Preloader/Preloader";


let Users = (props) => {

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

    const paginator = <Paginator
        totalItems={props.totalUsers}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        onSetPage={props.onSetPage}
        paginatorPortionSize={props.paginatorPortionSize}
    />;

    return (
        <div className={style.users}>
            <div>
                {props.isFetching ? <Preloader/> : null}
            </div>
            <div>
                {UsersList}
            </div>
            <div>
                {paginator}
            </div>
        </div>
    );
};

export default Users;