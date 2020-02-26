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

    return (
        <div className={classes.wrapper}>
            <div className={classes.dialogs}>
                <Dialog name={dialogsData[0].name} id={dialogsData[0].id}/>
                <Dialog name={dialogsData[1].name} id={dialogsData[1].id}/>
            </div>
            <div className={classes.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
            </div>
        </div>
    );
}

export default Messages;