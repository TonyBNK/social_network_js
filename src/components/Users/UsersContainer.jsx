import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {
    changeCurrentPageAC,
    followUnfollowAC,
    setUsersAC, setUsersTotalCountAC
} from "../../redux/usersReducer";


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

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);