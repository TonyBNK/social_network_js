import React from "react";
import {connect} from "react-redux";
import {
    changeCurrentPageAC,
    followUnfollowAC,
    setUsersAC, setUsersTotalCountAC
} from "../../redux/usersReducer";
import axios from "axios";
import {Users} from "./Users";


class UsersContainer extends React.Component {
    componentDidMount() {
        if (!this.props.users.length) {
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items);
                    this.props.setUsersTotalCount(response.data.totalCount);
                });
        }
    }

    changeCurrentPage = (page) => {
        this.props.changeCurrentPage(page);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => this.props.setUsers(response.data.items));
    }

    render() {
        return <Users
            users={this.props.users}
            currentPage={this.props.currentPage}
            pageSize={this.props.pageSize}
            usersTotalCount={this.props.usersTotalCount}
            followUnfollow={this.props.followUnfollow}
            changeCurrentPage={this.changeCurrentPage}
        />
    }
}

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
    usersTotalCount: state.usersPage.usersTotalCount
});

const mapDispatchToProps = (dispatch) => ({
    followUnfollow: (id) => {
        dispatch(followUnfollowAC(id));
    },
    setUsers: (users) => {
        dispatch(setUsersAC(users));
    },
    changeCurrentPage: (currentPage) => {
        dispatch(changeCurrentPageAC(currentPage));
    },
    setUsersTotalCount: (usersTotalCount) => {
        dispatch(setUsersTotalCountAC(usersTotalCount));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);