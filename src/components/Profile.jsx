import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
    return <div className={classes.content}>
        <div>
            <img className={`${classes.content} ${classes.wallpaper}`} src="https://s1.1zoom.me/b5050/297/Canada_Mountains_Scenery_488936_1920x1200.jpg" />
        </div>
        <div className={classes.item}>
            ava + description
    </div>
        <div>
            my posts
        <div>
                new post
        </div>
            <div>
                <div>
                    post 1
            </div>
                <div>
                    post 2
            </div>
            </div>
        </div>
    </div>
}

export default Profile;