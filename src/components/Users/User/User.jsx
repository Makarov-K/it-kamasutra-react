import React from "react";
import style from './User.module.css';
import defaultPhoto from './../../../assets/img/lent_54846_big_16.jpg'
import {NavLink} from "react-router-dom";
import * as axios from 'axios';

let User = (props) => {

    let onFollow = () => {
        axios.post('https://social-network.samuraijs.com/api/1.0/follow/' + props.id, {}, {
            withCredentials: true,
            headers: {
                "API-KEY": 'ab2c1ce9-6b51-44a1-bc57-be1221c2c356'
            }
        }).then(response => {
            debugger;
            if (response.data.resultCode === 0) {
                props.follow(props.id);
            }
        });
    };

    let onUnfollow = () => {
        axios.delete('https://social-network.samuraijs.com/api/1.0/follow/' + props.id, {
            withCredentials: true,
            headers: {
                "API-KEY": 'ab2c1ce9-6b51-44a1-bc57-be1221c2c356'
            }
        }).then(response => {
            if(response.data.resultCode === 0){
                props.unfollow(props.id);
            }
        })
    };

    return (
        <div className={style.user}>
            <NavLink to={`profile/${props.id}`}>
                <img src={props.photo != null ? props.photo : defaultPhoto}/>
            </NavLink>
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