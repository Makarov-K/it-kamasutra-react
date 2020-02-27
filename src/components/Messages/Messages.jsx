import React from 'react';
import classes from './Messages.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";



const Messages = () => {

    let dialogsData = [
        {id: 1, name: 'Vladimir'},
        {id: 2, name: 'Vova'},
    ];

    let messagesData = [
        {id: 1, message: 'Ebobaniy Obama'},
        {id: 2, message: 'Byl bi ty chelovekom'},
        {id: 3, message: 'Tvoyu doch\' eboot'}
    ];

    let DialogList = dialogsData.map( dialog => <Dialog name={dialog.name} id={dialog.id}/>);

    let MessageList = messagesData.map( message => <Message message={message.message}/>);

    return (
        <div className={classes.wrapper}>
            <div className={classes.dialogs}>
                {DialogList}
            </div>
            <div className={classes.messages}>
                {MessageList}
            </div>
        </div>
    );
}

export default Messages;