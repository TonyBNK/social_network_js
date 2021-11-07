import React from "react";
import c from './Header.module.scss';
import {NavLink} from "react-router-dom";
import logo from '../../images/logo.png';
import {Layout, Menu} from 'antd';
import 'antd/dist/antd.css';


const {Header: HeaderAntD} = Layout;

export const Header = (
    {
        isAuth,
        logOut
    }
) => {
    const logOutHandler = () => {
        logOut();
    }

    return (
        <HeaderAntD className={c.headerContainer}>
            <img src={logo} alt="логотип"/>
            <header>Catbook</header>
            <Menu theme='dark' mode='horizontal' style={{position: 'relative'}}>
                <Menu.Item style={{position: 'absolute', right: 0}}>
                    {
                        isAuth
                            // ? <button onClick={logOutHandler}>Logout</button>
                            ? <NavLink to={'/login'} onClick={logOutHandler}>Sign
                                Out</NavLink>
                            : <NavLink to={'/login'}>Sign In</NavLink>
                    }
                </Menu.Item>
            </Menu>
        </HeaderAntD>
    );
};