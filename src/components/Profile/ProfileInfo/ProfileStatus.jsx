import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
    };

    toggleEditMode() {
        this.setState({
            editMode: !this.state.editMode
        })
    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ? <div>
                        <input onBlur={this.toggleEditMode.bind(this)} value={this.props.profileStatus}
                               autoFocus={true}/>
                        <button></button>
                    </div>
                    : <span onDoubleClick={this.toggleEditMode.bind(this)}>{this.props.profileStatus}</span>}
            </div>
        )
    }
}

export default ProfileStatus;
