import React from 'react';
import style from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./My_posts/MyPosts";

const Profile = (props) => {
    return (
        <div className={style.profile}>
            <ProfileInfo
                profile={props.profile}
                profileStatus={props.profileStatus}
                updateProfileStatus={props.updateProfileStatus}
            />
            <MyPosts posts={props.posts} addPost={props.addPost}/>
        </div>
    );
};

export default Profile;
