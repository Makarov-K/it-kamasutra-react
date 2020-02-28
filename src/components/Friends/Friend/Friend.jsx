import React from 'react';
import style from './Friend.module.css';


const Friend = (props) => {
    return (
      <div className={style.friend}>
          <img src="https://novorossia.su/sites/default/files/putin_0_0.jpg" alt="friend's photo"/>
          <p>{props.name}</p>
      </div>
    );
}

export default Friend;