let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi people!', likes: 23},
            {id: 2, message: 'It looks much easier on videos :(', likes: 14}
        ]
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
        ]
    },
    sidebar: {
        friends: [
            {name: "Vovchik", src: "https://novorossia.su/sites/default/files/putin_0_0.jpg"},
            {name: "Sanya", src: "https://cs4.pikabu.ru/post_img/big/2015/08/30/7/1440929291_1364354273.jpeg"}
        ]
    }
};

export default state;