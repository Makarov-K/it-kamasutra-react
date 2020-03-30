import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {addPost, getProfile, getProfileStatus, updateProfileStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import withAuthRedirect from "../../HOC/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            this.props.authId ? userId = this.props.authId : userId = null;
        }
        this.props.getProfile(userId);
        this.props.getProfileStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        profileStatus: state.profilePage.profileStatus,
        posts: state.profilePage.posts,
        authId: state.auth.id
    }
};

export default compose(
    connect(mapStateToProps, {getProfile, getProfileStatus, updateProfileStatus, addPost}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);