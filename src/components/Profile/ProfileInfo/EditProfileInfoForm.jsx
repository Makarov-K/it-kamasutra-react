import React from "react";
import style from "./ProfileInfo.module.css";
import defaultPhoto from "../../../assets/img/lent_54846_big_16.jpg";
import ProfileStatus from "./ProfileStatus";
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../Common/FormsControls/FormsControls";

let EditProfileInfoForm = (props) => {
    return (
        <form className={style.profile_info} onSubmit={props.handleSubmit}>
            <img className={style.wallpaper}
                 src="https://img1.akspic.ru/image/104850-priroda-formirovanie-nacionalnyj_park-vodotok-dostoprimechatelnost-1920x1200.jpg"
            />
            <div className={style.ava_description}>
                <div className={style.ava}>
                    <img src={props.profile.photos.large || defaultPhoto}/>
                </div>
                {props.authId === props.profile.userId &&
                <div className={style.changeAvaBtn}>
                    <input type='file' onChange={props.onNewAvatarLoad}/>
                </div>
                }
                <div className={style.fullName}>
                    Full Name: <Field name={"fullName"} component={Input}/>
                </div>
                <div className={style.status}>
                    <ProfileStatus {...props}/>
                </div>
                <div className={style.aboutMe}>
                    About me: <Field name={"aboutMe"} component={Textarea}/>
                </div>
                <div className={style.lookingForAJob}>
                    Looking for a job: <Field name={"lookingForAJob"} component={"input"} type={"checkbox"}/>
                </div>
                <div className={style.LookingForAJobDescription}>
                    Professional skills: <Field name={"lookingForAJobDescription"} component={Textarea}/>
                </div>
                <div className={style.contacts}>
                    Me in Internet: {Object.keys(props.profile.contacts).map(key => {
                    return (
                        <div>
                            {`${key}: `}<Field key={key} component={Input} name={`contacts.${key}`}/>
                        </div>
                    )
                })}
                </div>
                <div className={style.editProfile}>
                    <button>Save</button>
                </div>
            </div>
        </form>
    )
};

EditProfileInfoForm = reduxForm({form: 'EditProfileInfoForm'})(EditProfileInfoForm);
export default EditProfileInfoForm;