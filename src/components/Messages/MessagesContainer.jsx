import React from 'react';
import Messages from "./Messages";
import {enterNewMessage, sendMessage} from "../../redux/messages-reducer";
import {connect} from "react-redux";
import withAuthRedirect from "../../HOC/withAuthRedirect";
import {compose} from "redux";


const mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
        newMessageText: state.messagesPage.newMessageText,
    }
};

export default compose(
    connect(mapStateToProps, {enterNewMessage, sendMessage}),
    withAuthRedirect
)(Messages);

