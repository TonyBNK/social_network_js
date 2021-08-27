import React from "react";
import c from './Header.module.css';

export const Header = (props) => {
    return (
        <header className={c.head}>
            <img src={props.logotype} alt="логотип"/>
        </header>
    );
};