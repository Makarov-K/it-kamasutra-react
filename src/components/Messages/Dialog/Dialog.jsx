import React from "react";
import style from './Dialog.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return (
      <div className={style.dialog}>
          <img src="https://yt3.ggpht.com/a/AGF-l78CPDktuWgkTLr_ZhEdMNT7HBjeVRVtMH0dHg=s900-c-k-c0xffffffff-no-rj-mo"/>
          <NavLink to={`/messages/${props.id}`}>{props.name}</NavLink>
      </div>
    );
}

export default Dialog;

//https://avatars.mds.yandex.net/get-pdb/197794/d3616c08-1c41-4b66-9e35-40ab3d0857fa/s1200