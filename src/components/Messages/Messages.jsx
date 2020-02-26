import React from 'react';
import classes from './Messages.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";



const Messages = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.dialogs}>
                <Dialog name="Vladimir" id="1"/>
                <Dialog name="Vova" id="2"/>
            </div>
            <div className={classes.messages}>
                <Message message="Ebobaniy Obama"/>
                <Message message="Byl bi ty chelovekom"/>
                <Message message="Tvoyu doch' eboot"/>
            </div>
        </div>
    );
}

export default Messages;