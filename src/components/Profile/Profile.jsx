import React from 'react';
import c from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import cat_with_tongue from "../../img/cat_with_tongue.jpg";
import angry_cat from "../../img/angry_cat.webp";

export const Profile = () => {

    let posts = [
        {id: 1, ava: {cat_with_tongue}, message: "Кто насрал в мой лоток?", likes: 5},
        {id: 2, ava: {angry_cat}, message: "Кожанный мешок опять забыл покормить :(", likes: 7},
    ];

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    );
};

