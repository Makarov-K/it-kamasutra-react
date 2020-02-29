import React from 'react';
import style from './Messages.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";



const Messages = (props) => {

    let DialogList = props.state.dialogs.map( dialog => <Dialog name={dialog.name} id={dialog.id}/>);
    let MessageList = props.state.messages.map( message => <Message message={message.message}/>);

    let sendMessageElement = React.createRef();
    let sendMessage = () => {
        let text = sendMessageElement.current.value;
        alert(text);
    }

    return (
        <div className={style.wrapper}>
            <div className={style.dialogs}>
                {DialogList}
            </div>
            <div className={style.messages}>
                {MessageList}
                <div className={style.sendMessage}>
                <textarea ref={sendMessageElement}></textarea>
                <button onClick={sendMessage}>Send message</button>
                </div>
            </div>
        </div>
    );
}

export default Messages;