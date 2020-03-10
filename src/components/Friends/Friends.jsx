import React from 'react';
import style from './Friends.module.css';
import Friend from "./Friend/Friend";


const Friends = (props) => {

    let friendsList = props.friends.map( friend => <Friend name={friend.name} src={friend.src}/>);

    return (
      <div className={style.friends}>
          {friendsList}
      </div>
    );
};

export default Friends;