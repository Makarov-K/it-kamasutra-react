import React from 'react';
import classes from './Profile.module.css';
import My_posts from "./My_posts/My_posts";
import Ava_Description from "./Ava_Description/Ava_Description";

const Profile = () => {
    return (
        <div className={classes.content}>
            <img className={`${classes.content} ${classes.wallpaper}`}
                 src="https://avatars.mds.yandex.net/get-pdb/2126974/bec88ae6-f645-42b3-8478-e5018ad2bf12/s1200"/>
            <Ava_Description/>
            <My_posts/>
        </div>
    );
}

export default Profile;