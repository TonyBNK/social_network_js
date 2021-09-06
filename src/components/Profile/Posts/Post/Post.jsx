import React from "react";
import c from './Post.module.css';

export const Post = (
    {
        id,
        ava,
        post,
        likesCount
    }
) => {
    return (
        <div className={c.item}>
            <img
                className={c.usersImg}
                src={ava}
                alt="ava"/> {post}
            <div>
                <button>
                    Like
                </button>
                {likesCount}
            </div>
        </div>
    );
}