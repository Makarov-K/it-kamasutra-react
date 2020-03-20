import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import * as axios from 'axios';
import {setAuthUserData, setAuthUserProfile, setFetching} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.setFetching(true);
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setAuthUserData(response.data.data);
                    this.props.setFetching(false);
                    let id = response.data.data.id;
                    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`,
                        {withCredentials: true})
                        .then(response => {
                            this.props.setAuthUserProfile(response.data)
                        })
                }
            });
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
        isFetching: state.auth.isFetching,
        authProfile: state.auth.authProfile
    }
};

export default connect(mapStateToProps, {setAuthUserData, setFetching, setAuthUserProfile})
(HeaderContainer);