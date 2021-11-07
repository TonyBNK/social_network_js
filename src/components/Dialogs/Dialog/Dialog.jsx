import React from "react";
import c from './Dialog.module.scss';
import {NavLink} from "react-router-dom";

export const Dialog = React.memo((
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
});