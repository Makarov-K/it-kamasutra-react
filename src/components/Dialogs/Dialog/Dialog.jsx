import React from "react";
import classes from './Dialog.module.css';

const Dialog = (props) => {
    return (
      <div className={classes.wrapper}>
          <img src="https://yt3.ggpht.com/a/AGF-l78CPDktuWgkTLr_ZhEdMNT7HBjeVRVtMH0dHg=s900-c-k-c0xffffffff-no-rj-mo"/>
          <p>{props.name}</p>
      </div>
    );
}

export default Dialog;