import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getUserProfile,
    getUserStatus,
    updateMyStatus
} from "../../bll/thunks/thunks";

class ProfileContainer extends React.PureComponent {
    componentDidMount() {
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

    render = () => {
        const {profile, status, updateMyStatus, ...restProps} = this.props;

        return <Profile
            profile={profile}
            status={status}
            updateMyStatus={updateMyStatus}
        />
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.userId,
});

export default compose(
    withRouter,
    withAuthRedirect,
    connect(mapStateToProps, {
        getUserProfile,
        getUserStatus,
        updateMyStatus
    })
)(ProfileContainer);
