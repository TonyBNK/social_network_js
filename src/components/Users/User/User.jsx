import React from "react";
import c from './User.module.css';

export const User = (
    {
        id,
        name,
        ava,
        followed,
        address,
        text,
        followUnfollow
    }
) => {
    const onClickHandler = () => {
        followUnfollow(id);
    }

    return (
        <div className={c.user} key={id}>
            <img src={ava} alt="ava"/>
            <button onClick={onClickHandler}>
                {followed ? 'Unfollow' : 'Follow'}
            </button>
            <div className={c.body}>
                <span className={c.name}>{name}</span>
                <span className={c.text}>{text}</span>
                <span
                    className={c.address}>{address.country}, {address.city}</span>
            </div>
        </div>
    );
}