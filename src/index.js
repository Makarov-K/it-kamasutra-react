import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/store";


let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={store.getState()}
                addPost={store.addPost.bind(store)}
                changeNewPostText={store.changeNewPostText.bind(store)}
                enterNewMessage={store.enterNewMessage.bind(store)}
                sendMessage={store.sendMessage.bind(store)}
            />
        </BrowserRouter>, document.getElementById('root'));
};

rerenderEntireTree();

store.subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
