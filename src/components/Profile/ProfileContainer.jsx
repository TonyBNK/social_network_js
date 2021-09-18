import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {profileAPI} from "../../api/api";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        profileAPI.getUsersProfile(userId).then(data => this.props.setUserProfile(data));
    }

    render = () => {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default connect(mapStateToProps, {
    setUserProfile
})(withRouter(ProfileContainer));
