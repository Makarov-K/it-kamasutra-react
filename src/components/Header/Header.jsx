import React from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";
import defaultPhoto from '../../assets/img/lent_54846_big_16.jpg'

const Header = (props) => {
    return (
        <header className={style.header}>
            <img src="https://doit.ua/files/images/portfolio/1/1501v73135841.jpg"/>
            {props.authProfile
                ? <div className={style.loginBlock}>
                    <button onClick={props.logout}>logout</button>
                    {props.login}
                    <img src={props.authProfile.photos.small
                        ? props.authProfile.photos.small
                        : defaultPhoto}/>
                </div>
                : <div className={style.loginBlock}><NavLink to='/login'>Login</NavLink></div>}
        </header>
    )
};

export default Header;