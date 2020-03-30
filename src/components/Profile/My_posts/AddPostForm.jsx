import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLength} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";

const maxLength10 = maxLength(10);

let AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={'newPostText'} placeholder={'What\'s new?'}
                       validate={[maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
};

AddPostForm = reduxForm({form: 'addPost'})(AddPostForm);
export default AddPostForm;