import React from "react";
import c from './Post.module.scss';

export const Post = (
    {
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