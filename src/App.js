import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import MessagesContainer from "./components/Messages/MessagesContainer";
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
                       render={() => <Profile store={props.store}/>}/>
                <Route path='/messages'
                       render={() => <MessagesContainer store={props.store}/>}/>
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
};

export default App;

