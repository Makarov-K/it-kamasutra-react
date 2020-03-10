import React from 'react';
import Messages from "./Messages";
import {enterNewMessageCreator, sendMessageCreator} from "../../redux/messages-reducer";
import {connect} from "react-redux";


/*
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
*/

const mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
        newMessageText: state.messagesPage.newMessageText
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
      changeNewMessageText(newText) {dispatch(enterNewMessageCreator(newText))},
      sendNewMessage() {dispatch(sendMessageCreator())}
  }
};

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;