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
        case enter_new_message: {
            let stateCopy = {...state};
            stateCopy.newMessageText = action.newMessageText;
            return stateCopy;
        }
        case send_message: {
            let stateCopy = {...state};
            stateCopy.messages = [...state.messages];
            let newMessage = {
                id: 4,
                message: state.newMessageText
            };
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        default:
            return state;
    }
};

export let enterNewMessageCreator = (text) => ({type: enter_new_message, newMessageText: text});
export let sendMessageCreator = () => ({type: send_message});
export default messagesReducer;