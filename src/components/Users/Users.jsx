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

    return (
        <div className={style.users}>
            <div>
                <Paginator
                    totalItems={props.totalUsers}
                    pageSize={props.pageSize}
                    currentPage={props.currentPage}
                    onSetPage={props.onSetPage}
                    paginatorPortionSize={props.paginatorPortionSize}
                />
            </div>
            {props.isFetching ? <Preloader/> : null}
            <div>
                {UsersList}
            </div>
        </div>
    );
};

export default Users;