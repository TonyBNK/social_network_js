import React from "react";
import c from './MyPosts.module.css';
import {Post} from "./Post/Post";

export const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post ava={p.ava} message={p.message} likes={p.likes}/>);

    return (
        <div className={c.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea>New Post</textarea>
                </div>
                <div>
                    <button>Send</button>
                </div>
            </div>
            <div className={c.posts}>
                {postsElements}
            </div>
        </div>
    );
}
