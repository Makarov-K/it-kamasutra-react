import React from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";
import Preloader from "../Common/Preloader/Preloader";

const Header = (props) => {
    return (
        <header className={style.header}>
            <img src="https://doit.ua/files/images/portfolio/1/1501v73135841.jpg"/>
            {props.isFetching && <div className={style.loginBlock}><Preloader/></div>}
            <div className={style.loginBlock}>
                {props.isAuth ? props.login : <NavLink to='/login'>Login</NavLink>}
            </div>
        </header>
    )
};

export default Header;