import {reset} from "redux-form";

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
    ]
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let messageKey = state.messages.length +1;
            let newMessage = {
                id: messageKey,
                message: action.newMessageText
            };
            return {
                ...state,
                messages: [...state.messages, newMessage]
            };
        default:
            return state;
    }
};

export let sendMessage = (newMessageText) => (dispatch) => {
    dispatch({type: SEND_MESSAGE, newMessageText});
    dispatch(reset("sendMessage"))
};

export default messagesReducer;