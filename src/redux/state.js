let rerenderEntireTree = () => {
    console.log('state has been changed');
};

let state = {
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
};

export const addPost = () => {
        let newPost = {
            id: 3,
            message: state.profilePage.newPostText,
            likes: 0
        };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export const changeNewPostText = (newPostText) => {
    state.profilePage.newPostText = newPostText;
    rerenderEntireTree(state);
};

export const enterNewMessage = (newMessageText) => {
    state.messagesPage.newMessageText = newMessageText;
    rerenderEntireTree(state);
};

export const sendMessage = () => {
    let newMessage = {
        id: 4,
        message: state.messagesPage.newMessageText
    };
    state.messagesPage.messages.push(newMessage);
    state.messagesPage.newMessageText = '';
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};

export default state;