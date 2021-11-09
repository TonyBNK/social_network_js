import {Posts} from "./Posts";
import {connect} from "react-redux";
import {compose} from "redux";
import React from "react";
import {addNewPost} from "../../../redux/actions/actions";

const mapStateToProps = (state) => ({
    posts: state.profilePage.posts
});

export const PostsContainer = compose(
    connect(mapStateToProps, {
        addNewPost,
    }),
    React.memo
)(Posts);