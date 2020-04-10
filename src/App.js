import React, {lazy, Suspense} from 'react';
import './App.css';
import {Route, Switch, withRouter} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import Preloader from "./components/Common/Preloader/Preloader";
import {initializeApp} from "./redux/app-reducer";
import {getInitialized} from "./selectors/appSelectors";
const Login = lazy(() => import("./components/Login/Login"));
const ProfileContainer = lazy(() => import('./components/Profile/profileContainer'));
const Messages = lazy(() => import("./components/Messages/Messages"));
const News = lazy(() => import("./components/News/News"));
const Music = lazy(() => import("./components/Music/Music"));
const Settings = lazy(() => import("./components/Settings/Settings"));
const FriendsContainer = lazy(() => import("./components/Friends/FriendsContainer"));
const UsersContainer = lazy(() => import("./components/Users/UsersContainer"));


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="content">
                    <Suspense fallback={<Preloader/>}>
                        <Switch>
                            <Route path='/login'
                                   render={() => <Login/>}/>
                            <Route path='/profile/:userId?'
                                   render={() => <ProfileContainer />}/>
                            <Route path='/messages'
                                   render={() => <Messages/>}/>
                            <Route path='/news' component={News}/>
                            <Route path='/music' component={Music}/>
                            <Route path='/settings' component={Settings}/>
                            <Route path='/friends'
                                   render={() => <FriendsContainer/>}/>
                            <Route path='/users'
                                   render={() => <UsersContainer/>}/>
                        </Switch>
                    </Suspense>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    initialized: getInitialized(state)
});

export default compose(
    connect(mapStateToProps, {initializeApp}),
    withRouter
)(App);

