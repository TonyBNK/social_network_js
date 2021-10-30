import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import c from './Profile.module.css';
import {PostsContainer} from "./Posts/PostsContainer";

export const Profile = (
    {
        isOwner,
        profile,
        status,
        updateMyStatus,
        updateMyPhoto
    }
) => {
    return (
        <div className={c.profile}>
            <ProfileInfo
                isOwner={isOwner}
                profile={profile}
                status={status}
                updateMyStatus={updateMyStatus}
                updateMyPhoto={updateMyPhoto}
            />
            <PostsContainer/>
        </div>
    );
};

