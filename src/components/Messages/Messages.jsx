import React from 'react';
import style from './Messages.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";



const Messages = (props) => {

    let DialogList = props.messagesPage.dialogs.map( dialog => <Dialog name={dialog.name} id={dialog.id}/>);
    let MessageList = props.messagesPage.messages.map( message => <Message message={message.message}/>);

    let sendMessageElement = React.createRef();

    let sendMessage = () => {
        props.sendMessage();
    };

    let enterNewMessage = () => {
        let newMessageText = sendMessageElement.current.value;
        props.enterNewMessage(newMessageText);
    }

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
                    ref={sendMessageElement}
                    value={props.messagesPage.newMessageText}
                    onChange={enterNewMessage}
                />
                <button
                    onClick={sendMessage}
                >Send message</button>
                </div>
            </div>
        </div>
    );
}

export default Messages;