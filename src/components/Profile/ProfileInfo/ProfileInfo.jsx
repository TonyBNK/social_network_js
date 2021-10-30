import React from "react";
import c from './ProfileInfo.module.scss';
import {Preloader} from "../../Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatusWithHooks";
import avatar from "../../../images/catUser.png";


export const ProfileInfo = React.memo((
    {
        isOwner,
        profile,
        status,
        updateMyStatus,
        updateMyPhoto
    }
) => {
    if (!profile) {
        return <Preloader/>
    }

    const oMainPhotoSelected = (e) => {
        e.target.files.length && updateMyPhoto(e.target.files[0]);
    }

    return (
        <div className={c.info}>
            <div className={c.avatar}>
                <img src={profile.photos.large || avatar} alt="ava"/>
                {
                    isOwner && <input type="file" onChange={oMainPhotoSelected}/>
                }
            </div>
            <ProfileStatus
                status={status}
                updateMyStatus={updateMyStatus}
            />
            <div className={c.description}>
                <span className={c.fullName}>
                    {profile.fullName}
                </span>
            </div>
        </div>
    );
});