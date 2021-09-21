import {
    addNewPost,setNewPost
} from "../../../redux/profileReducer";
import {Posts} from "./Posts";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
   posts: state.profilePage.posts,
   newPostText: state.profilePage.newPostText
});

export const PostsContainer = connect(mapStateToProps, {
    setNewPost,
    addNewPost
})(Posts);