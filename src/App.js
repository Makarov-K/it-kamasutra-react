import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Messages from "./components/Messages/Messages";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from './components/Friends/Friends';


const App = (props) => {
    return (
        <div className="wrapper">
            <Header/>
            <Navbar/>
            <div className="content">
                <Route path='/profile'
                       render={() => <Profile
                           profilePage={props.state.profilePage}
                           addPost={props.addPost}
                           changeNewPostText={props.changeNewPostText}
                       />}/>
                <Route path='/messages'
                       render={() => <Messages
                           messagesPage={props.state.messagesPage}
                           enterNewMessage={props.enterNewMessage}
                           sendMessage={props.sendMessage}
                       />}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
                <Route path='/friends'
                       render={() => <Friends
                           friends={props.state.sidebar.friends}
                       />}/>
            </div>
        </div>
    );
}

export default App;

