import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {followUnfollowAC, setUsersAC} from "../../redux/usersReducer";


const mapStateToProps = (state) => ({
    users: state.usersPage.users
});

const mapDispatchToProps = (dispatch) => ({
    followUnfollow: (id) => {
        dispatch(followUnfollowAC(id));
    },
    setUsers: (users) => {
        dispatch(setUsersAC(users));
    }
});

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);