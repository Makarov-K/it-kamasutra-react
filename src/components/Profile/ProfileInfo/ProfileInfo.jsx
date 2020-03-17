import React from "react";
import style from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import needJob from '../../../assets/img/Looking for a job.jpg';


const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }

    return (
        <div className={style.profile_info}>
                <img className={style.wallpaper} src="https://avatars.mds.yandex.net/get-pdb/2126974/bec88ae6-f645-42b3-8478-e5018ad2bf12/s1200"/>
            <div className={style.ava_description}>
                <div className={style.ava}>
                    <img src={props.profile.photos.large}/>
                </div>
                <div className={style.description}>
                    <h3>{props.profile.fullName}</h3>
                    <p>{props.profile.aboutMe}</p>
                    {props.profile.lookingForAJob && <img src={needJob}/>}
                    <div className={style.contacts}>
                        <h4>Me in Internet:</h4>
                        <select>
                            {props.profile.contacts.facebook && <option>{props.profile.contacts.facebook}</option>}
                            {props.profile.contacts.website && <option>{props.profile.contacts.website}</option>}
                            {props.profile.contacts.vk && <option>{props.profile.contacts.vk}</option>}
                            {props.profile.contacts.twitter && <option>{props.profile.contacts.twitter}</option>}
                            {props.profile.contacts.instagram && <option>{props.profile.contacts.instagram}</option>}
                            {props.profile.contacts.youtube && <option>{props.profile.contacts.youtube}</option>}
                            {props.profile.contacts.github && <option>{props.profile.contacts.github}</option>}
                            {props.profile.contacts.mainLink && <option>{props.profile.contacts.mainLink}</option>}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;