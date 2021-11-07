import React from 'react';
import c from "./Navbar.module.scss";
import {NavLink} from "react-router-dom";
import {FriendsContainer} from "../Friends/FriendsContainer";
import {Menu} from "antd";

export const Navbar = React.memo(() => {
    return (
        <Menu theme='light' mode='inline'
              defaultSelectedKeys={['1']}
              className={c.navbarMenu}
        >
            <Menu.Item key='1'>
                <NavLink
                    to='/profile'
                    activeClassName={c.active}>
                    Profile
                </NavLink>
            </Menu.Item>
            <Menu.Item key='2'>
                <NavLink
                    to='/dialogs'
                    activeClassName={c.active}>
                    Dialogs
                </NavLink>
            </Menu.Item>
            <Menu.Item key='3'>
                <NavLink
                    to='/news'
                    activeClassName={c.active}>
                    News
                </NavLink>
            </Menu.Item>
            <Menu.Item key='4'>
                <NavLink
                    to='/music'
                    activeClassName={c.active}>
                    Music
                </NavLink>
            </Menu.Item>
            <Menu.Item key='5'>
                <NavLink
                    to={'/users'}
                    activeClassName={c.active}>
                    Find Users
                </NavLink>
            </Menu.Item>
            <Menu.Item key='6'>
                <NavLink
                    to={'/settings'}
                    activeClassName={c.active}>
                    Settings
                </NavLink>
            </Menu.Item>
            {/*<FriendsContainer/>*/}
        </Menu>
    );
});