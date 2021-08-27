import React from "react";
import c from './ProfileInfo.module.css';

export const ProfileInfo = (props) => {
    return (
        <div className={c.myInfo}>
            <div className={c.titleImage}>
                <img src={props.titleImage} alt="азгард"/>
            </div>
            <img className={c.myAva}
                 src={props.ava}
                 alt="кот с очками"/> <span className={c.nickname}>Mr. Cat</span>
        </div>
    );
};