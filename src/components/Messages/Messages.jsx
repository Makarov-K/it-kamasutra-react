import React from 'react';
import style from './Messages.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";



const Messages = (props) => {

    let DialogList = props.dialogs.map( dialog => <Dialog name={dialog.name} id={dialog.id}/>);

    let MessageList = props.messages.map( message => <Message message={message.message}/>);

    return (
        <div className={style.wrapper}>
            <div className={style.dialogs}>
                {DialogList}
            </div>
            <div className={style.messages}>
                {MessageList}
            </div>
        </div>
    );
}

export default Messages;