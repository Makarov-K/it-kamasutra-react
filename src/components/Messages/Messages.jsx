import React from 'react';
import style from './Messages.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {enterNewMessageCreator, sendMessageCreator} from "../../redux/messages-reducer";


const Messages = (props) => {

    let DialogList = props.messagesPage.dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>);
    let MessageList = props.messagesPage.messages.map(message => <Message message={message.message}/>);


    let sendMessage = () => {
        let action = sendMessageCreator();
        props.dispatch(action);
    };

    let enterNewMessage = (event) => {
        let newText = event.target.value;
        let action = enterNewMessageCreator(newText);
        props.dispatch(action);
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
                <div className={style.sendMessage}>
                <textarea
                    value={props.messagesPage.newMessageText}
                    onChange={enterNewMessage}/>
                    <button onClick={sendMessage}>Send message</button>
                </div>
            </div>
        </div>
    );
}

export default Messages;