import React from "react";
import c from './Post.module.css';

export const Post = (props) => {
    return (<div className={c.item}>
            <img className={c.usersImg} src={props.ava} alt="ava"/> {props.message}
            <div>
                <button>Like</button> {props.likesCount}
            </div>
        </div>
    );
}