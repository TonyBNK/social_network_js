import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getUserProfile,
    getUserStatus, saveProfile, setEditMode, updateMyPhoto,
    updateMyStatus
} from "../../bll/thunks/thunks";

class ProfileContainer extends React.PureComponent {
    refreshProfile(){
        const {history, getUserProfile, getUserStatus} = this.props;

        let userId = this.props.match.params.userId;

        if (!userId){
            userId = this.props.userId;

            if (!userId){
                history.push('/login');
            }
        }

        getUserProfile(userId);
        getUserStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId){
            this.refreshProfile();
        }
    }

    render = () => {
        const {profile, status, editMode, updateMyStatus, updateMyPhoto, saveProfile, setEditMode, ...restProps} = this.props;

        return <Profile
            isOwner={!this.props.match.params.userId}
            profile={profile}
            status={status}
            updateMyStatus={updateMyStatus}
            updateMyPhoto={updateMyPhoto}
            saveProfile={saveProfile}
            editMode={editMode}
            setEditMode={setEditMode}
        />
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.userId,
    editMode: state.app.editMode
});

export default compose(
    withRouter,
    withAuthRedirect,
    connect(mapStateToProps, {
        getUserProfile,
        getUserStatus,
        updateMyStatus,
        updateMyPhoto,
        saveProfile,
        setEditMode
    })
)(ProfileContainer);
