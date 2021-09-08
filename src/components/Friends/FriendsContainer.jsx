import React from "react";
import {Friends} from "./Friends";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
   friends: state.friendsPage.friends
});

const mapDispatchToProps = (dispatch) => ({

});

export const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);