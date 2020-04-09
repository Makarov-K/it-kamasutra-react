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
    let DialogList = props.dialogs.map(dialog => <Dialog key={dialog.id} name={dialog.name} id={dialog.id}/>);
    let MessageList = props.messages.map(message => <Message key={message.id} message={message.message}/>);

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
                <SendMessageForm
                    onSubmit={onSubmit}
                    messageText={props.messageText}
                />
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    dialogs: state.messagesPage.dialogs,
    messages: state.messagesPage.messages,
    messageText: state.messagesPage.messageText
});

Messages = compose(
    connect(mapStateToProps, {sendMessage}),
    withAuthRedirect
)(Messages);
export default Messages;