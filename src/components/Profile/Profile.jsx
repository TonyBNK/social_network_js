import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import c from './Profile.module.css'
import azgard from './../../img/azgard.jpg';
import cat_wit_glasses from './../../img/cat_with_glasses.jpg';
import {Posts} from "./Posts/Posts";

export const Profile = (props) => {

    return (
        <div className={c.profile}>
            <ProfileInfo titleImage={azgard}
                         ava={cat_wit_glasses}/>
            <Posts posts={props.profilePage}/>
        </div>
    );
};

