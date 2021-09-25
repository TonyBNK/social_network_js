import React from "react";
import c from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
    componentDidMount() {
        debugger;
    }

    state = {
        isEdit: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            isEdit: true
        });
    }

    deactivateEditMode = () => {
        this.setState({
            isEdit: false
        });
        this.props.updateProfileStatus(this.state.status);
    }

    updateStatusLocally = (e) => {
        this.setState(({
            status: e.currentTarget.value
        }));
    }

    render() {
        return (
            <div className={c.profileStatus}>
                {
                    this.state.isEdit
                        ? <div>
                            <input
                                value={this.state.status}
                                onBlur={this.deactivateEditMode}
                                autoFocus
                                onChange={this.updateStatusLocally}/>
                        </div>
                        : <div>
                            <span onDoubleClick={this.activateEditMode}>
                            {this.props.status}
                    </span>
                        </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;