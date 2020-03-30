import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../Common/FormsControls/FormsControls";
import {maxLength} from "../../utils/validators/validators";

const maxLength10 = maxLength(10);

let SendMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={'newMessageText'} validate={[maxLength10]}/>
            </div>
            <div>
                <button>send message</button>
            </div>
        </form>
    );
};

SendMessageForm = reduxForm({form: 'sendMessage'})(SendMessageForm);
export default SendMessageForm;