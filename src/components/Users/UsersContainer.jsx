import React from "react";
import {connect} from "react-redux";
import {
    followUser,
    requestUsers,
    setFollowingProgress,
    unfollowUser
} from "../../bll/reducers/usersReducer";
import {Users} from "./Users";
import {Preloader} from "../Preloader/Preloader";
import {
    getCurrentPage, getFollowingInProgress,
    getPageSize,
    getUsers, getUsersTotalCount
} from "../../bll/selectors/usersSelector";
import {compose} from "redux";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps !== this.props || nextState !== this.state
    }

    render() {
        return <div>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                users={this.props.users}
                currentPage={this.props.page}
                pageSize={this.props.pageSize}
                usersTotalCount={this.props.usersTotalCount}
                follow={this.props.followUser}
                unfollow={this.props.unfollowUser}
                followingInProgress={this.props.followingInProgress}
                setFollowingProgress={this.props.setFollowingProgress}
                requestUsers={this.props.requestUsers}
            />
        </div>
    }
}

const mapStateToProps = (state) => ({
    users: getUsers(state),
    page: getCurrentPage(state),
    pageSize: getPageSize(state),
    usersTotalCount: getUsersTotalCount(state),
    followingInProgress: getFollowingInProgress(state)
});

export default compose(
    connect(mapStateToProps, {
        followUser,
        unfollowUser,
        setFollowingProgress,
        requestUsers
    })
)(UsersContainer);
