import React from "react";
import c from './Header.module.css';
import {NavLink} from "react-router-dom";
import logo from '../../img/logo.png';

export const Header = (props) => {
    return (
        <header className={c.head}>
            <img src={logo} alt="логотип"/>
            <div className={c.loginBlock}>
                {
                    props.isAuth
                        ? props.login
                        : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
};