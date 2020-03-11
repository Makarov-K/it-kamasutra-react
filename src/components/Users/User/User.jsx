import React from "react";
import style from './User.module.css';


let User = (props) => {

    let onFollow = () => {
        props.follow(props.id);
    };

    return (
        <div className={style.user}>
            <img src={props.ava}/>
            <button onClick={onFollow}>{props.followed}</button>
            <div className={style.info}>
                <h3 className={style.name}>{props.name}</h3>
                <h3 className={style.age}>{props.age}</h3>
                <h3 className={style.cc}>{props.city}, {props.country}</h3>
                <p className={style.status}>{props.status}</p>
            </div>
        </div>
    )
};

export default User;