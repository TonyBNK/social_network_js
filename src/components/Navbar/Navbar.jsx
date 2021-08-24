import React from 'react';
import c from "./Navbar.module.css";
import {Menu} from "./Menu/Menu";
import {Friends} from "./Friends/Friends";

export const Navbar = (props) => {
    return (
        <nav className={c.navigator}>
            <Menu/>
            <Friends friends={props.friendsPage.friends}/>
        </nav>
    );
};