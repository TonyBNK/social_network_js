import React from "react";
import c from './ProfileInfo.module.css';
import {Preloader} from "../../Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatusWithHooks";

export const ProfileInfo = React.memo((
    {
        profile,
        status,
        updateStatus
    }
) => {
    if (!profile) {
        return <Preloader/>
    }

    return (
        <div className={c.info}>
            <div className={c.avatar}>
                <img src={profile.photos.large} alt="ava"/>
            </div>
            <ProfileStatus
                status={status}
                updateStatus={updateStatus}
            />
            <div className={c.description}>
                <span className={c.fullName}>
                    {profile.fullName}
                </span>
            </div>
        </div>
    );
});