import React from 'react';
import c from "./Navbar.module.css";
import {Friends} from "../Friends/Friends";
import {NavLink} from "react-router-dom";

export const Navbar = (props) => {
    return (
        <nav className={c.navbar}>
            <div className={c.item}><NavLink to='/profile' activeClassName={c.active}>Profile</NavLink></div>
            <div className={c.item}><NavLink to='/dialogs' activeClassName={c.active}>Messages</NavLink></div>
            <div className={c.item}><NavLink to='/news' activeClassName={c.active}>News</NavLink></div>
            <div className={c.item}><NavLink to='/music' activeClassName={c.active}>Music</NavLink></div>
            <div className={c.item}><NavLink to='/settings' activeClassName={c.active}>Settings</NavLink></div>
            <div className={c.itemFriends}><Friends friends={props.friendsPageState.friends}/></div>
        </nav>
    );
};