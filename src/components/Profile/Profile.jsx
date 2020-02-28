import React from 'react';
import style from './Profile.module.css';
import My_posts from "./My_posts/My_posts";
import Profile_Info from "./Profile_Info/Profile_Info";

const Profile = (props) => {
    return (
        <div className={style.profile}>
            <Profile_Info/>
            <My_posts posts={props.state.posts}/>
        </div>
    );
}

export default Profile;