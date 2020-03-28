import React from "react";
import {Field, reduxForm} from "redux-form";

let AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newPostText'} placeholder={'What\'s new?'}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
};

AddPostForm = reduxForm({form: 'addPost'})(AddPostForm);
export default AddPostForm;