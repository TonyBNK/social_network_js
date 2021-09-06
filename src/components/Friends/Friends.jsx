import React from "react";
import c from './Friends.module.css';

export const Friends = (
    {
        friends
    }
) => {

    return (
        <div className={c.friends}>
            <div className={c.title}>
                Friends
            </div>
            <div className={c.friendsElements}>
                {friends}
            </div>
        </div>
    );
}