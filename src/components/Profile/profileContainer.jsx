import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    addPost, putNewAvatar,
    requestProfile,
    requestProfileStatus,
    updateProfileStatus
} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import withAuthRedirect from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {getPosts, getProfile, getProfileStatus} from "../../selectors/profileSelectors";
import {getAuthId} from "../../selectors/authSelectors";
import Preloader from "../Common/Preloader/Preloader";


class ProfileContainer extends React.Component {

    refreshProfile = () => {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authId
        }
        this.props.requestProfile(userId);
        this.props.requestProfileStatus(userId)
    };

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        if(!this.props.profile){
            return <Preloader/>
        }
        return (
            <Profile
                profile={this.props.profile}
                profileStatus={this.props.profileStatus}
                updateProfileStatus={this.props.updateProfileStatus}
                authId={this.props.authId}
                posts={this.props.posts}
                addPost={this.props.addPost}
                putNewAvatar={this.props.putNewAvatar}
            />
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
    connect(mapStateToProps, {
        requestProfile, requestProfileStatus, updateProfileStatus,
        addPost, putNewAvatar
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);