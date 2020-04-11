import React from "react";
import style from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import needJob from '../../../assets/img/Looking for a job.jpg';
import defaultPhoto from '../../../assets/img/lent_54846_big_16.jpg';
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={style.profile_info}>
            <img className={style.wallpaper}
                 src="https://img1.akspic.ru/image/104850-priroda-formirovanie-nacionalnyj_park-vodotok-dostoprimechatelnost-1920x1200.jpg"/>
            <div className={style.ava_description}>
                <div className={style.ava}>
                    <img src={props.profile.photos.large
                        ? props.profile.photos.large
                        : defaultPhoto}/>
                </div>
                <div className={style.description}>
                    <h3>{props.profile.fullName}</h3>
                    <p>{props.profile.aboutMe}</p>
                    <ProfileStatus {...props}/>
                    {props.profile.lookingForAJob && <img src={needJob}/>}
                    <div className={style.contacts}>
                        <h4>Me in Internet:</h4>
                        <Contacts contacts={props.profile.contacts}/>
                    </div>
                </div>
            </div>
        </div>
    );
};
const Contacts = ({contacts}) => {
    let options = [];
    for(let prop in contacts){
        if(contacts[prop] != null){
            options.push(<option>{contacts[prop]}</option>)
        }
    }
    return(
        <select>{options}</select>
    )
};
export default ProfileInfo;
/*<select>
                            {props.profile.contacts.facebook && <option>{props.profile.contacts.facebook}</option>}
                            {props.profile.contacts.website && <option>{props.profile.contacts.website}</option>}
                            {props.profile.contacts.vk && <option>{props.profile.contacts.vk}</option>}
                            {props.profile.contacts.twitter && <option>{props.profile.contacts.twitter}</option>}
                            {props.profile.contacts.instagram && <option>{props.profile.contacts.instagram}</option>}
                            {props.profile.contacts.youtube && <option>{props.profile.contacts.youtube}</option>}
                            {props.profile.contacts.github && <option>{props.profile.contacts.github}</option>}
                            {props.profile.contacts.mainLink && <option>{props.profile.contacts.mainLink}</option>}
                        </select>*/