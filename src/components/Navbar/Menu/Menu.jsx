import React from "react";
import c from './Menu.module.css';
import {NavLink} from "react-router-dom";

export const Menu = () => {
    return (
        <div className={c.menu}>
            <div className={c.item}><NavLink to='/profile' activeClassName={c.active}>Profile</NavLink></div>
            <div className={c.item}><NavLink to='/dialogs' activeClassName={c.active}>Messages</NavLink></div>
            <div className={c.item}><NavLink to='/news' activeClassName={c.active}>News</NavLink></div>
            <div className={c.item}><NavLink to='/music' activeClassName={c.active}>Music</NavLink></div>
            <div className={c.item}><NavLink to='/settings' activeClassName={c.active}>Settings</NavLink></div>
        </div>
    );
};
