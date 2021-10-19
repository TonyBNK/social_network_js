import {addNewPost} from "../../../bll/reducers/profileReducer";
import {Posts} from "./Posts";
import {connect} from "react-redux";
import {compose} from "redux";
import React from "react";

const mapStateToProps = (state) => ({
    posts: state.profilePage.posts
});

export const PostsContainer = compose(
    connect(mapStateToProps, {
        addNewPost,
    }),
    React.memo
)(Posts);