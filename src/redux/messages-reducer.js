const enter_new_message = 'ENTER-NEW-MESSAGE';
const send_message = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Vladimir'},
        {id: 2, name: 'Vova'}
    ],
    messages: [
        {id: 1, message: 'Ebobaniy Obama'},
        {id: 2, message: 'Byl bi ty chelovekom'},
        {id: 3, message: 'Tvoyu doch\' eboot'}
    ],
    newMessageText: ''
};

const messagesReducer = (state = initialState, action) => {
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