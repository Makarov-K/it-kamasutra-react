import React from "react";
import style from './User.module.css';
import defaultPhoto from './../../../assets/img/lent_54846_big_16.jpg'
import {NavLink} from "react-router-dom";


let User = (props) => {
    return (
        <div className={style.user}>
            <NavLink to={`profile/${props.id}`}>
                <img src={props.photo != null ? props.photo : defaultPhoto}/>
            </NavLink>
            {props.followed === false ? <button onClick={() => {props.onFollow(props.id)}}>Follow</button>
                : <button onClick={()=>{props.onUnfollow(props.id)}}>Unfollow</button>}
            <div className={style.info}>
                <h3 className={style.name}>{props.name}</h3>
                <p className={style.status}>{props.status}</p>
            </div>
        </div>
    )
};

export default User;