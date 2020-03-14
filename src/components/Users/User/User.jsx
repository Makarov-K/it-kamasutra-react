import React from "react";
import style from './User.module.css';
import defaultPhoto from './../../../assets/img/lent_54846_big_16.jpg'


let User = (props) => {

    let onFollow = () => {
        props.follow(props.id);
    };

    let onUnfollow = () => {
        props.unfollow(props.id);
    };

    return (
        <div className={style.user}>
            <img src={
                props.photo != null ? props.photo
                    : defaultPhoto
            }/>
            {props.followed === false ? <button onClick={onFollow}>Follow</button>
            : <button onClick={onUnfollow}>Unfollow</button>}
            <div className={style.info}>
                <h3 className={style.name}>{props.name}</h3>
                <p className={style.status}>{props.status}</p>
            </div>
        </div>
    )
};

export default User;