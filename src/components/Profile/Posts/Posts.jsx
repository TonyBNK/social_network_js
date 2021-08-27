import React from "react";
import {Post} from "./Post/Post";
import c from "./Posts.module.css";

export const Posts = (props) => {

    let postsElements = props.posts.map(p =>
        <Post id={p.id}
              ava={p.ava}
              message={p.message}
              likesCount={p.likesCount}/>
    );

    let newPostText = React.createRef();
    const addPost = () => {
        debugger;
        props.addPost(newPostText.current.value);
        newPostText.current.value = '';
    }

    return (
        <div className={c.allPosts}>
            <h3 className={c.title}>My Posts</h3>
            <div className={c.newPost}>
                <div>
                    <textarea ref={newPostText}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Send</button>
                </div>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    );
};