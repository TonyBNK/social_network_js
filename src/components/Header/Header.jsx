import React from "react";
import h from './Header.module.css';
import logo from './../../img/logo.png';

export const Header = () => {
    return(
    <header className={h.head}>
        <img
            src={logo}
            alt="типа картинка"/>
    </header>
    );
};