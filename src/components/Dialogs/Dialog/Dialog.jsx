import React from "react";
import c from './Dialog.module.css';
import {NavLink} from "react-router-dom";

export const Dialog = (props) => {
    let path = `/dialogs/${props.id}`;
    return(
        <div className={c.dialog}>
            <NavLink to={path} activeClassName={c.active}>{props.name}</NavLink>
        </div>
    );
};