import React from 'react';
import classes from './Profile.module.css';
import My_posts from "./My_posts/My_posts";
import Profile_Info from "./Profile_Info/Profile_Info";

const Profile = () => {
    return (
        <div className={classes.profile}>
            <Profile_Info/>
            <My_posts/>
        </div>
    );
}

export default Profile;