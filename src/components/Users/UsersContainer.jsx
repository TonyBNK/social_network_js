import React from "react";
import {connect} from "react-redux";
import {
    setFollowingProgress,
    getUsers,
    changeCurrentPage, followUser, unfollowUser
} from "../../redux/usersReducer";
import {Users} from "./Users";
import {Preloader} from "../Preloader/Preloader";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    render() {
        return <div>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                users={this.props.users}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                usersTotalCount={this.props.usersTotalCount}
                follow={this.props.followUser}
                unfollow={this.props.unfollowUser}
                changeCurrentPage={this.props.changeCurrentPage}
                followingInProgress={this.props.followingInProgress}
                setFollowingProgress={this.props.setFollowingProgress}
            />
        </div>
    }
}

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
    usersTotalCount: state.usersPage.usersTotalCount,
    followingInProgress: state.usersPage.followingInProgress
});

export default connect(mapStateToProps, {
    followUser,
    unfollowUser,
    changeCurrentPage,
    setFollowingProgress,
    getUsers
})(UsersContainer);