import React from "react";
import c from './Header.module.scss';
import {NavLink} from "react-router-dom";
import logo from '../../images/logo.png';

export const Header = (
    {
        isAuth,
        login,
        logOut
    }
) => {
    const logOutHandler = () => {
        logOut();
    }

    return (
        <header className={c.head}>
            <img src={logo} alt="логотип"/>
            {
                isAuth
                    // ? <button onClick={logOutHandler}>Logout</button>
                    ? <NavLink to={'/login'} onClick={logOutHandler}>Sign Out</NavLink>
                    : <NavLink to={'/login'}>Sign In</NavLink>
            }
        </header>
    );
};