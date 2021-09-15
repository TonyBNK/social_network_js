import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import c from './Profile.module.css'
import azgard from './../../img/azgard.jpg';
import {PostsContainer} from "./Posts/PostsContainer";

export const Profile = (
    {
        profile
    }
) => {
    return (
        <div className={c.profile}>
            <ProfileInfo
                titleImage={azgard}
                profile={profile}
            />
            <PostsContainer/>
        </div>
    );
};

