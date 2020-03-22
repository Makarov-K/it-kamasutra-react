import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import profileApi from "../../DAL/profile-api";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 6415;
        }
        profileApi.getProfile(userId)
            .then(profile => {
                this.props.setProfile(profile);
            })
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
};


export default connect(mapStateToProps,
    {setProfile})
(withRouter(ProfileContainer));