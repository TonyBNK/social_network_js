import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import c from './Profile.module.scss';
import {PostsContainer} from "./Posts/PostsContainer";


export const Profile = (
    {
        isOwner,
        profile,
        status,
        updateMyStatus,
        updateMyPhoto,
        saveProfile,
        editMode,
        setEditMode
    }
) => {
    return (
        <div className={c.profileContainer}>
            <ProfileInfo
                isOwner={isOwner}
                profile={profile}
                status={status}
                updateMyStatus={updateMyStatus}
                updateMyPhoto={updateMyPhoto}
                saveProfile={saveProfile}
                editMode={editMode}
                setEditMode={setEditMode}
            />
            <PostsContainer/>
        </div>
    );
};

