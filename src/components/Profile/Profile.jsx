import React from 'react';
import style from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./My_posts/MyPosts";

const Profile = (props) => {
    return (
        <div className={style.profile}>
            <ProfileInfo {...props}/>
            <MyPosts {...props}/>
        </div>
    );
};

export default Profile;
