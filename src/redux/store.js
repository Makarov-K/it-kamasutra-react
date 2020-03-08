import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi people!', likes: 23},
                {id: 2, message: 'It looks much easier on videos :(', likes: 14}
            ],
            newPostText: ''
        },
        messagesPage: {
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
        },
        sidebar: {
            friends: [
                {name: "Vovchik", src: "https://novorossia.su/sites/default/files/putin_0_0.jpg"},
                {name: "Sanya", src: "https://cs4.pikabu.ru/post_img/big/2015/08/30/7/1440929291_1364354273.jpeg"}
            ]
        }
    },
    _callSubscriber() {
        console.log('state has been changed');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },


    dispatch(action) {
        profileReducer(this._state.profilePage, action);
        messagesReducer(this._state.messagesPage, action);
        sidebarReducer(this._state.sidebar, action);
        this._callSubscriber();
    }
};

window.store = store;
export default store;