import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {Preloader} from "../Preloader/Preloader";
import {
    getCurrentPage, getFollowingInProgress,
    getPageSize,
    getUsers, getUsersTotalCount
} from "../../bll/selectors/usersSelector";
import {compose} from "redux";
import {followUser, requestUsers, unfollowUser} from "../../bll/thunks/thunks";
import {setFollowingProcess} from "../../bll/actions/actions";


class UsersContainer extends React.PureComponent {
    componentDidMount() {
        const {requestUsers, currentPage, pageSize} = this.props;
        requestUsers(currentPage, pageSize);
    }

    render() {
        const {
            isFetching,
            users,
            currentPage,
            pageSize,
            usersTotalCount,
            followUser,
            unfollowUser,
            followingInProgress,
            setFollowingProcess,
            requestUsers
        } = this.props;

        return <div>
            {isFetching ? <Preloader/> : null}
            <Users
                users={users}
                currentPage={currentPage}
                pageSize={pageSize}
                usersTotalCount={usersTotalCount}
                follow={followUser}
                unfollow={unfollowUser}
                followingInProgress={followingInProgress}
                setFollowingProcess={setFollowingProcess}
                requestUsers={requestUsers}
            />
        </div>
    }
}

const mapStateToProps = (state) => ({
    users: getUsers(state),
    currentPage: getCurrentPage(state),
    pageSize: getPageSize(state),
    usersTotalCount: getUsersTotalCount(state),
    followingInProgress: getFollowingInProgress(state)
});

export default compose(
    connect(mapStateToProps, {
        followUser,
        unfollowUser,
        setFollowingProcess,
        requestUsers
    })
)(UsersContainer);
