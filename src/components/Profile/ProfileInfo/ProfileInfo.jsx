import React from "react";
import c from './ProfileInfo.module.scss';
import {Preloader} from "../../Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatusWithHooks";
import avatar from "../../../images/catUser.png";
import {ProfileDescription} from "./ProfileDescription/ProfileDescription";
import ProfileDescriptionForm
    from "./ProfileDescriptionForm/ProfileDescriptionForm";
import {Avatar, Button} from 'antd';
import {EditOutlined} from "@ant-design/icons";


export const ProfileInfo = React.memo((
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
    if (!profile) {
        return <Preloader/>
    }

    const oMainPhotoSelected = (e) => {
        e.target.files.length && updateMyPhoto(e.target.files[0]);
    }

    const onSubmitForm = (formData) => {
        saveProfile(formData);
    }

    return (
        <div className={c.infoContainer}>
            <div className={c.avatarContainer}>
                <Avatar size={150} src={profile.photos.large || avatar}/>
                {
                    isOwner &&
                    <>
                        <div className={c.overlay}></div>
                        <input type="file" onChange={oMainPhotoSelected}/>
                    </>
                }
            </div>
            <ProfileStatus
                status={status}
                updateMyStatus={updateMyStatus}
            />
            <div className={c.descriptionContainer}>
                {
                    (isOwner && !editMode) &&
                    <div className={c.ownerContainer}>
                        <Button onClick={() => setEditMode(true)}
                                shape='circle'
                                icon={<EditOutlined/>}/>
                    </div>
                }
                {
                    editMode
                        ? <ProfileDescriptionForm initialValues={profile}
                                                  onSubmit={onSubmitForm}
                                                  cancelEditMode={() => setEditMode(false)}/>
                        : <ProfileDescription profile={profile}/>
                }
            </div>
        </div>
    );
});

export const Contact = (
    {
        contactTitle,
        contactValue
    }
) => {
    return (
        <p className={c.contact}>
            <b>{contactTitle}</b>: {contactValue}
        </p>
    )
}
