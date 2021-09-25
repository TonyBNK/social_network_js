import React from "react";
import c from './Header.module.css';
import {NavLink} from "react-router-dom";
import logo from '../../img/logo.png';

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
            <div className={c.loginBlock}>
                {
                    isAuth
                        ? <div>
                            {login} <button onClick={logOutHandler}>Logout</button>
                        </div>
                        : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
};