const enter_new_message = 'ENTER-NEW-MESSAGE';
const send_message = 'SEND-MESSAGE';

const messagesReducer = (state, action) => {
    switch (action.type) {
        case enter_new_message:
            state.newMessageText = action.newMessageText;
            return state;
        case send_message:
            let newMessage = {
                id: 4,
                message: state.newMessageText
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        default:
            return state;
    }
};


export let enterNewMessageCreator = (text) => ({type: enter_new_message, newMessageText: text});
export let sendMessageCreator = () => ({type: send_message});
export default messagesReducer;