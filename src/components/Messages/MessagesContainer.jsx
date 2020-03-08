import React from 'react';
import Messages from "./Messages";
import {enterNewMessageCreator, sendMessageCreator} from "../../redux/messages-reducer";


const MessagesContainer = (props) => {

    let state = props.store.getState().messagesPage;

    let sendMessage = () => {
        let action = sendMessageCreator();
        props.store.dispatch(action);
    };

    let enterNewMessage = (newText) => {
        let action = enterNewMessageCreator(newText);
        props.store.dispatch(action);
    };

    return (
        <Messages
            dialogs={state.dialogs}
            messages={state.messages}
            newMessageText={state.newMessageText}
            sendNewMessage={sendMessage}
            changeNewMessageText={enterNewMessage}
        />
    );
};

export default MessagesContainer;