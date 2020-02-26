import React from "react";
import classes from './Dialog.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return (
      <div className={classes.dialog}>
          <img src="https://yt3.ggpht.com/a/AGF-l78CPDktuWgkTLr_ZhEdMNT7HBjeVRVtMH0dHg=s900-c-k-c0xffffffff-no-rj-mo"/>
          <NavLink to={`/messages/${props.id}`}>{props.name}</NavLink>
      </div>
    );
}

export default Dialog;