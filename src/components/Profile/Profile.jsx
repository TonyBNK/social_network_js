import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import c from './Profile.module.css'
import azgard from './../../img/azgard.jpg';
import cat_wit_glasses from './../../img/cat_with_glasses.jpg';
import {PostsContainer} from "./Posts/PostsContainer";

export const Profile = (
    {
        store
    }
) => {

    return (
        <div className={c.profile}>
            <ProfileInfo
                titleImage={azgard}
                ava={cat_wit_glasses}
            />
            <PostsContainer store={store}/>
        </div>
    );
};

