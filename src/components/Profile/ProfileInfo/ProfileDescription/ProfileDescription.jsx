import React from "react";
import c from "./ProfileDescription.module.scss";
import {Contact} from "../ProfileInfo";


export const ProfileDescription = (
    {
        profile
    }
) => {
    return (
        <div className={c.description}>
            <div className={c.fullName}>
                {profile.fullName}
            </div>
            <div>
                <b>About me</b>: {profile.aboutMe}
            </div>
            <div className={c.jobSearch}>
                <b>Looking for a
                    job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            <div>
                <b>Looking for a job
                    description</b>: {profile.lookingForAJobDescription}
            </div>
            <div className={c.contacts}>
                <b>Contacts</b>: {
                Object.keys(profile.contacts).map(key => profile.contacts[key] && <Contact
                        key={key}
                        contactTitle={key}
                        contactValue={profile.contacts[key]}
                    />
                )
            }
            </div>
        </div>
    )
}
