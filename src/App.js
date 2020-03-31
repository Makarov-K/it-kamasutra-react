import React from 'react';
import './App.css';
import {Route, withRouter} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import FriendsContainer from "./components/Friends/FriendsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/profileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Messages from "./components/Messages/Messages";
import {connect} from "react-redux";
import {compose} from "redux";
import Preloader from "./components/Common/Preloader/Preloader";
import {initializeApp} from "./redux/app-reducer";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }
        return (
            <div className="wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="content">
                    <Route path='/login'
                           render={() => <Login/>}/>
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer/>}/>
                    <Route path='/messages'
                           render={() => <Messages/>}/>
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
    }
}

let mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

export default compose(
    connect(mapStateToProps, {initializeApp}),
    withRouter
)(App);

