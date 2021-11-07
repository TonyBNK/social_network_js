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
        <div className={c.friends}>
            <div className={c.title}>
                Friends
            </div>
            <div className={c.friendsElements}>
                {friendsList}
            </div>
        </div>
    );
}