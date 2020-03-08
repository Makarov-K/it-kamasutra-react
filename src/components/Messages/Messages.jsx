import React from 'react';
import style from './Messages.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";


const Messages = (props) => {

    let DialogList = props.dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>);
    let MessageList = props.messages.map(message => <Message message={message.message}/>);


    let onSendMessage = () => {
        props.sendNewMessage();
    };

    let onEnterNewMessage = (event) => {
        let newText = event.target.value;
        props.changeNewMessageText(newText);
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
                    value={props.newMessageText}
                    onChange={onEnterNewMessage}/>
                    <button onClick={onSendMessage}>Send message</button>
                </div>
            </div>
        </div>
    );
};

export default Messages;