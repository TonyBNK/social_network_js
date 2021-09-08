import React from "react";
import {
    addNewPostActionCreator,
    setNewPostActionCreator
} from "../../../redux/profileReducer";
import {Posts} from "./Posts";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
   posts: state.profilePage.posts,
   newPostText: state.profilePage.newPostText
});

const mapDispatchToProps = (dispatch) => ({
    setNewPost: (text) => {
        dispatch(setNewPostActionCreator(text));
    },
    addNewPost: () => {
        dispatch(addNewPostActionCreator());
    }
});

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);