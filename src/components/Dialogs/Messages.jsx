import React from 'react';
import classes from './Messages.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";



const Messages = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.dialogs}>
                <Dialog name="Vladimir"/>
                <Dialog name="Vladimir"/>
            </div>
            <div className={classes.messages}>
                <Message message="Ebobaniy Obama"/>
                <Message message="Ebobaniy Obama"/>
                <Message message="Ebobaniy Obama"/>
            </div>
        </div>
    );
}

export default Messages;