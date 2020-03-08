import React from 'react';
import style from './Profile.module.css';
import Profile_Info from "./Profile_Info/Profile_Info";
import MyPostsContainer from "./My_posts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={style.profile}>
            <Profile_Info/>
            <MyPostsContainer store={props.store}/>
        </div>
    );
}

export default Profile;
