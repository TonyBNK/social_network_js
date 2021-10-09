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
        let userId = this.props.match.params.userId;

        if (!userId){
            userId = this.props.userId;
            if (!userId){
                this.props.history.push('/login');
            }
        }

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
        updateProfileStatus
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);

