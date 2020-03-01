import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";


let rerenderEntireTree = (state, ...callback) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={callback[0]}
                 changeNewPostText={callback[1]}
                 enterNewMessage={callback[2]}
                 sendMessage={callback[3]}
            />
        </BrowserRouter>, document.getElementById('root'));
};

export default rerenderEntireTree;