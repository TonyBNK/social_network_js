import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfile,
    getUserStatus,
    updateProfileStatus
} from "../../bll/reducers/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        const userId = this.props.match.params.userId;

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
    status: state.profilePage.status
});

export default compose(
    connect(mapStateToProps, {
        getUserProfile,
        getUserStatus,
        updateProfileStatus
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);

