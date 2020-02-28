import React from 'react';
import style from './Friends.module.css';
import Friend from "./Friend/Friend";
import {NavLink} from "react-router-dom";


const Friends = (props) => {
    return (
      <div className={style.friends}>
          <h3><NavLink to='/friends' activeClassName={style.activeLink}>Friends</NavLink></h3>
          <Friend name="Volodya"/>
          <Friend name="Vovan"/>
      </div>
    );
}

export default Friends;