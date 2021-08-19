import React from 'react';
import p from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import azgard from './../../img/azgard.jpg';
import cat_with_glasses from './../../img/cat_with_glasses.jpg'

export const Profile = () => {
    return (
        <div className={p.content}>
            <div>
                <img src={azgard}
                     alt="типа космос"/>
            </div>
            <div>
                <img src={cat_with_glasses} alt="котэ" width={150}/>
                + description
            </div>
            <MyPosts/>
        </div>
    );
};

