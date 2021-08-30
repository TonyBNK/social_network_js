import React from "react";
import {Post} from "./Post/Post";
import c from "./Posts.module.css";

export const Posts = (props) => {

    let newPostText = React.createRef();

    let postsForProfile = props.posts.getState().profilePage.posts.map(p =>
        <Post id={p.id}
              ava={p.ava}
              message={p.message}
              likesCount={p.likesCount}/>
    );

    const onChangeHandler = (e) => {
        props.posts.setNewPost(e.currentTarget.value);
    }

    const onClickHandler = () => {
        props.posts.addNewPost(newPostText.current.value);
    }

    return (
        <div className={c.allPosts}>
            <h3 className={c.title}>My Posts</h3>
            <div className={c.newPost}>
                <div>
                    <textarea ref={newPostText}
                              value={props.posts.getState().profilePage.newPost.text}
                              onChange={onChangeHandler}/>
                </div>
                <div>
                    <button onClick={onClickHandler}>Send</button>
                </div>
            </div>
            <div>
                {postsForProfile}
            </div>
        </div>
    );
};