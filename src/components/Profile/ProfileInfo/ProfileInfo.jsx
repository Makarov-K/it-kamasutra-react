import React from "react";
import style from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import defaultPhoto from '../../../assets/img/lent_54846_big_16.jpg';
import ProfileStatus from "./ProfileStatus";
import Contacts from "../../Common/Contacts/Contacts";
import EditProfileInfoForm from "./EditProfileInfoForm";


const ProfileInfo = (props) => {

    const onNewAvatarLoad = (e) => {
        if (e.target.files.length) {
            props.putNewAvatar(e.target.files[0])
        }
    };

    const onSubmit = (formData) => {
        props.saveProfileInfoChanges(formData);
    };

    if (!props.profile) {
        return <Preloader/>
    }
    if (props.profileInfoEditMode) {
        return <EditProfileInfoForm contacts={props.profile.contacts}
                                    initialValues={{...props.profile}}
                                    onSubmit={onSubmit}
        />
    }
    return (
        <div className={style.profile_info}>
            <img className={style.wallpaper}
                 src="https://img1.akspic.ru/image/104850-priroda-formirovanie-nacionalnyj_park-vodotok-dostoprimechatelnost-1920x1200.jpg"/>
            <div className={style.ava_description}>
                <div className={style.ava}>
                    <img src={props.profile.photos.large || defaultPhoto}/>
                </div>
                <div className={style.changeAvaBtn}>
                    <input type='file' onChange={onNewAvatarLoad}/>
                </div>
                <div className={style.fullName}>
                    <h3>{props.profile.fullName}</h3>
                </div>
                <div className={style.status}>
                    <ProfileStatus {...props}/>
                </div>
                <div className={style.aboutMe}>
                    <p><b>About me: </b>{props.profile.aboutMe}</p>
                </div>
                <div className={style.lookingForAJob}>
                    <h4>Looking for a job:
                        {props.profile.lookingForAJob
                            ? " Yes!"
                            : " No"}
                    </h4>
                </div>
                <div className={style.LookingForAJobDescription}>
                    <p><b>Professional skills: </b>{props.profile.lookingForAJobDescription}</p>
                </div>
                <div className={style.contacts}>
                    <h4>Me in Internet: {<Contacts contacts={props.profile.contacts}/>}</h4>
                </div>
                {props.authId === props.profile.userId &&
                <div className={style.editProfile}>
                    <button onClick={() => props.setProfileInfoEditMode(true)}>Edit</button>
                </div>
                }
            </div>
        </div>
    );
};

export default ProfileInfo;
