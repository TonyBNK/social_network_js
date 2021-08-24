import React from "react";
import s from "./Post.module.css";

export const Post = (props) => {
    return (
        <div className={s.item}>
            <img src={props.ava}
                 alt=""/>
            {props.message}
            <div>
                <button>Like</button> {props.likes}
            </div>
        </div>
    );
}