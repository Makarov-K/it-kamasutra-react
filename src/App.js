import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import MessagesContainer from "./components/Messages/MessagesContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import FriendsContainer from "./components/Friends/FriendsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/profileContainer";


const App = (props) => {
    return (
        <div className="wrapper">
            <Header/>
            <Navbar/>
            <div className="content">
                <Route path='/profile'
                       render={() => <ProfileContainer/>}/>
                <Route path='/messages'
                       render={() => <MessagesContainer/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
                <Route path='/friends'
                       render={() => <FriendsContainer/>}/>
                <Route path='/users'
                       render={() => <UsersContainer/>}/>
            </div>
        </div>
    );
};

export default App;

