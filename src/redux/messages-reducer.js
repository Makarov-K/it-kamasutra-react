const SEND_MESSAGE = 'SEND_MESSAGE';

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
    messageText: 'hi'
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 4,
                message: action.newMessageText
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
                messageText: ''
            };
        default:
            return state;
    }
};

export let sendMessage = (newMessageText) => ({type: SEND_MESSAGE, newMessageText});

export default messagesReducer;