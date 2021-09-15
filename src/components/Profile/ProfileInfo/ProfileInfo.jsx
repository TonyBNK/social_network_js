import React from "react";
import c from './ProfileInfo.module.css';
import {Preloader} from "../../Preloader/Preloader";

export const ProfileInfo = (
    {
        profile,
        titleImage
    }
) => {
    if (!profile) {
        return <Preloader/>
    }

    return (
        <div className={c.info}>
            <div className={c.titleImage}>
                <img src={titleImage} alt="азгард"/>
            </div>
            <div className={c.avatar}>
                <img src={profile.photos.large} alt="ava"/>
            </div>
            <div className={c.description}>
                <span className={c.fullName}>
                    {profile.fullName}
                </span>
            </div>
        </div>
    );
};