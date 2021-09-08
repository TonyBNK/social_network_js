import React from "react";
import c from "./Posts.module.css";
import {Post} from "./Post/Post";

export const Posts = (
    {
        posts,
        newPostText,
        setNewPost,
        addNewPost
    }
) => {
    const postsList = posts.map(p =>
        <Post
            id={p.id}
            ava={p.ava}
            post={p.post}
            likesCount={p.likesCount}
        />
    )

    const onChangeHandler = (e) => setNewPost(e.currentTarget.value);

    const onClickHandler = () => addNewPost();

    return (
        <div className={c.allPosts}>
            <h3 className={c.title}>
                My Posts
            </h3>
            <div className={c.newPost}>
                <div>
                    <textarea
                        value={newPostText}
                        onChange={onChangeHandler}
                    />
                </div>
                <div>
                    <button onClick={onClickHandler}>
                        Send
                    </button>
                </div>
            </div>
            <div>
                {postsList}
            </div>
        </div>
    );
};