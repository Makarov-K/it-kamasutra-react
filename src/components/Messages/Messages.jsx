import React from 'react';
import style from './Messages.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {compose} from "redux";
import {connect} from "react-redux";
import withAuthRedirect from "../../HOC/withAuthRedirect";
import SendMessageForm from "./SendMessageForm";
import {sendMessage} from "../../redux/messages-reducer";

let Messages = (props) => {
    let DialogList = props.dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>);
    let MessageList = props.messages.map(message => <Message message={message.message}/>);

    let onSubmit = (formData) => {
      props.sendMessage(formData.newMessageText);
    };

    return (
        <div className={style.wrapper}>
            <div className={style.dialogs}>
                {DialogList}
            </div>
            <div className={style.messages}>
                <div>
                    {MessageList}
                </div>
                <SendMessageForm onSubmit={onSubmit}/>
            </div>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
        newMessageText: state.messagesPage.newMessageText,
    }
};
Messages = compose(
    connect(mapStateToProps, {sendMessage}),
    withAuthRedirect
)(Messages);
export default Messages;