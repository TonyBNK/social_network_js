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
        let userId = this.props.match.params.userId;

        if (!userId){
            userId = this.props.userId;
            if (!userId){
                this.props.history.push('/login');
            }
        }

        this.props.getUserProfile(userId);
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render = () => {
        return <Profile
            profile={this.props.profile}
            status={this.props.status}
            updateProfileStatus={this.props.updateProfileStatus}
        />
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.userId,
});

export default compose(
    connect(mapStateToProps, {
        getUserProfile,
        getUserStatus,
        updateMyStatus
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);

