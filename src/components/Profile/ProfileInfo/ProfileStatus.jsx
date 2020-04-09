import React, {useEffect, useState} from "react";

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false);
    const onSetEditMode = () => {
        setEditMode(true)
    };
    const onDeactivateEditMode = () => {
        setEditMode(false);
        props.updateProfileStatus(profileStatus)
    };

    const [profileStatus, setProfileStatus] = useState(props.profileStatus);
    const onStatusChange = (e) => {
        setProfileStatus(e.target.value)
    };

    useEffect(() => {
       setProfileStatus(props.profileStatus)
    }, [props.profileStatus]);

    return (
        <div>
            {editMode
                ? <div>
                    <input onBlur={onDeactivateEditMode} value={profileStatus}
                           autoFocus={true} onChange={onStatusChange}/>
                </div>
                : <span onDoubleClick={props.authId === props.profile.userId && onSetEditMode}>
                        {props.profileStatus || "What's new?"}</span>}
        </div>
    )
};

export default ProfileStatus;

/*
state = {
    editMode: false,
    profileStatus: this.props.profileStatus
};
activateEditMode = () => {
    this.setState({
        editMode: true
    })
};
deactivateEditMode = () => {
    this.setState({
        editMode: false
    });
    this.props.updateProfileStatus(this.state.profileStatus)
};
onStatusChange = (e) => {
    this.setState({
        profileStatus: e.currentTarget.value
    })
};
componentDidUpdate(prevProps, prevState) {
    if(prevProps.profileStatus !== this.props.profileStatus){
        this.setState({
            profileStatus: this.props.profileStatus
        })
    }
}*/
