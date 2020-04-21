import React from "react";
import style from "./ProfileInfo.module.css";
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../Common/FormsControls/FormsControls";

let EditProfileInfoForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <img className={style.wallpaper}
                 src="https://img1.akspic.ru/image/104850-priroda-formirovanie-nacionalnyj_park-vodotok-dostoprimechatelnost-1920x1200.jpg"
            />
            <div className={style.profileInfoForm}>
                <div>
                    <div>
                        Full Name: <Field name={"fullName"} component={Input}/>
                    </div>
                    <br/>
                    <div>
                        About me: <Field name={"aboutMe"} component={Textarea}/>
                    </div>
                    <br/>
                    <div>
                        Looking for a job: <Field name={"lookingForAJob"} component={"input"} type={"checkbox"}/>
                    </div>
                    <br/>
                    <div>
                        Professional skills: <Field name={"lookingForAJobDescription"} component={Textarea}/>
                    </div>
                    <br/>
                    <div>
                        Me in Internet: {Object.keys(props.contacts).map(key => {
                        return (
                            <div key={key}>
                                {`${key}: `}<Field component={Input} name={`contacts.${key}`}/>
                            </div>
                        )
                    })}
                    </div>
                    <div>
                        <button>Save</button>
                    </div>
                </div>
            </div>
        </form>
    )
};

EditProfileInfoForm = reduxForm({form: 'EditProfileInfoForm'})(EditProfileInfoForm);
export default EditProfileInfoForm;