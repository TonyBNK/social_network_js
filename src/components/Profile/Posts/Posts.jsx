import React from "react";
import {Post} from "./Post/Post";
import c from "./Posts.module.css";

export const Posts = (props) => {

    let postsForProfile = props.postsState.posts.map(p =>
        <Post id={p.id}
              ava={p.ava}
              message={p.message}
              likesCount={p.likesCount}/>
    );

    const onChangeHandler = (e) => {
        //props.setNewPost(e.currentTarget.value);
        let action = {type: 'SET-NEW-POST', text: e.currentTarget.value};
        props.dispatch(action);
    }

    const onClickHandler = () => {
        //props.addNewPost(props.postsState.newPost);
        props.dispatch({type: 'ADD-NEW-POST'});
    }

    return (
        <div className={c.allPosts}>
            <h3 className={c.title}>My Posts</h3>
            <div className={c.newPost}>
                <div>
                    <textarea value={props.postsState.newPost}
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