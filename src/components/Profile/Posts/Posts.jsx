import React from "react";
import c from "./Posts.module.css";

export const Posts = (
    {
        posts,
        newPostText,
        setNewPost,
        addNewPost
    }
) => {
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
                {posts}
            </div>
        </div>
    );
};