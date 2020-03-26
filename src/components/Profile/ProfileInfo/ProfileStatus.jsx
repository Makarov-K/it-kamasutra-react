import React from "react";

class ProfileStatus extends React.Component {

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
    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ? <div>
                        <input onBlur={this.deactivateEditMode} value={this.state.profileStatus}
                               autoFocus={true} onChange={this.onStatusChange}/>
                    </div>
                    : <span onDoubleClick={this.activateEditMode}>
                        {this.props.profileStatus || "What's new?"}</span>}
            </div>
        )
    }
}

export default ProfileStatus;
