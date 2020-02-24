import React from "react";
import classes from './Ava_Description.module.css'

const Ava_Description = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.ava}>
                <img src="https://yandex.by/images/_crpd/cT6aaQ643/70700beOW/h1p1MFDbmpLmqW5cRpWT6VI3bn4a-cuZNkiQK37HHRVL9-SsTWiSRv4y5pILbRmhKAtxAJ1gWCKNA8Vui0HW87ZLXQRYo5eXp6Q-EAbs7_USM0c_a6ic"/>
            </div>
            <div className={classes.description}>
                status + info
            </div>
        </div>
    );
}

export default Ava_Description;