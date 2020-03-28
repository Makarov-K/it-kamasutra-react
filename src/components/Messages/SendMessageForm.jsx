import React from 'react';
import {Field, reduxForm} from "redux-form";

let SendMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newMessageText'}/>
            </div>
            <div>
                <button>send message</button>
            </div>
        </form>
    );
};

SendMessageForm = reduxForm({form: 'sendMessage'})(SendMessageForm);
export default SendMessageForm;