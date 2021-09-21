import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.setUserProfile(this.props.match.params.userId);
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

