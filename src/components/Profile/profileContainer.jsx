import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    addPost,
    requestProfile,
    requestProfileStatus,
    updateProfileStatus
} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import withAuthRedirect from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {getPosts, getProfile, getProfileStatus} from "../../selectors/profileSelectors";
import {getAuthId} from "../../selectors/authSelectors";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            this.props.authId ? userId = this.props.authId : userId = null;
        }
        this.props.requestProfile(userId);
        this.props.requestProfileStatus(userId)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            let userId = this.props.match.params.userId;
            this.props.requestProfile(userId);
            this.props.requestProfileStatus(userId)
        }
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: getProfile(state),
        profileStatus: getProfileStatus(state),
        posts: getPosts(state),
        authId: getAuthId(state)
    }
};

export default compose(
    connect(mapStateToProps, {requestProfile, requestProfileStatus, updateProfileStatus, addPost}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);