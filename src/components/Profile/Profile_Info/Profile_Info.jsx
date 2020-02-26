import React from "react";
import classes from './Profile_Info.module.css'

const Profile_Info = () => {
    return (
        <div className={classes.profile_info}>
            <div className={classes.wallpaper}>
                <img src="https://avatars.mds.yandex.net/get-pdb/2126974/bec88ae6-f645-42b3-8478-e5018ad2bf12/s1200"/>
            </div>
            <div className={classes.ava_description}>
                <div className={classes.ava}>
                    <img src="https://yandex.by/images/_crpd/cT6aaQ643/70700beOW/h1p1MFDbmpLmqW5cRpWT6VI3bn4a-cuZNkiQK37HHRVL9-SsTWiSRv4y5pILbRmhKAtxAJ1gWCKNA8Vui0HW87ZLXQRYo5eXp6Q-EAbs7_USM0c_a6ic"/>
                </div>
                <div className={classes.description}>
                    status + info
                </div>
            </div>
        </div>
    );
}

export default Profile_Info;