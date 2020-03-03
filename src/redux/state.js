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
  methods: {
      addPost() {
          let newPost = {
              id: 3,
              message: this._state.profilePage.newPostText,
              likes: 0
          };
          this._state.profilePage.posts.push(newPost);
          this._state.profilePage.newPostText = '';
          this.rerenderEntireTree(this._state);
      },
      changeNewPostText(newPostText) {

          this._state.profilePage.newPostText = newPostText;
          this.rerenderEntireTree(this._state);
      },
      enterNewMessage(newMessageText) {
          this._state.messagesPage.newMessageText = newMessageText;
          this.rerenderEntireTree(this._state);
      },
      sendMessage() {
          let newMessage = {
              id: 4,
              message: this._state.messagesPage.newMessageText
          };
          this._state.messagesPage.messages.push(newMessage);
          this._state.messagesPage.newMessageText = '';
          this.rerenderEntireTree(this._state);
      },
      subscribe(observer) {
          this.rerenderEntireTree = observer;
      },
      rerenderEntireTree() {
          console.log('state has been changed');
      }
  }
};

export default store;