import {addNewPost} from "../../../redux/profileReducer";
import {Posts} from "./Posts";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    posts: state.profilePage.posts
});

export const PostsContainer = connect(mapStateToProps, {
    addNewPost
})(Posts);