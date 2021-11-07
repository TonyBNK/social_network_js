import React from "react";
import c from './Friends.module.scss';
import {Friend} from "./Friend/Friend";


export const Friends = (
    {
        friends
    }
) => {
    const friendsList = friends.map(f =>
        <Friend
            key={f.id}
            name={f.name}
            ava={f.ava}
        />
    );

    return (
        <div className={c.friendsContainer}>
            <div className={c.titleContainer}>
                Friends
            </div>
            <div className={c.bodyContainer}>
                {friendsList}
            </div>
        </div>
    );
}