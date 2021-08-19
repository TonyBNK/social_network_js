import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import cat_with_tongue from './../../../img/cat_with_tongue.jpg';
import angry_cat from './../../../img/angry_cat.webp';

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea>New Post</textarea>
                <button>Send</button>
            </div>
            <div className={s.posts}>
                <Post message={"Кто насрал в мой лоток?"}
                      ava={cat_with_tongue}
                      likes={5}/>
                <Post message={"Кожанный мешок опять забыл покормить :("}
                      ava={angry_cat}
                      likes={7}/>
            </div>
        </div>
    );
}
