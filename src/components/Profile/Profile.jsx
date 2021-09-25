import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import c from './Profile.module.css';
import {PostsContainer} from "./Posts/PostsContainer";

export const Profile = (
    {
        profile,
        status,
        updateProfileStatus
    }
) => {
    return (
        <div className={c.profile}>
            <ProfileInfo
                profile={profile}
                status={status}
                updateProfileStatus={updateProfileStatus}
            />
            <PostsContainer/>
        </div>
    );
};

