import React from "react";
import {Friends} from "./Friends";
import {connect} from "react-redux";
import {compose} from "redux";


const mapStateToProps = (state) => ({
   friends: state.friendsPage.friends
});

const mapDispatchToProps = (dispatch) => ({

});

export const FriendsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    React.memo
)(Friends);