import React from "react";
import c from './Dialog.module.css';
import {NavLink} from "react-router-dom";

export const Dialog = (
    {
        id,
        ava,
        name
    }
) => {
    const path = `/dialogs/${id}`;

    return (
        <div className={c.dialog}>
            <img
                src={ava}
                alt="ава"
            />
            <NavLink
                to={path}
                activeClassName={c.active}>
                {name}
            </NavLink>
        </div>
    );
};