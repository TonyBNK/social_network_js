import React from "react";
import c from './Friend.module.scss';
import {Avatar} from 'antd';
import {UserOutlined} from '@ant-design/icons';


export const Friend = (
    {
        name,
        ava
    }
) => {
    return (
        <div className={c.friendContainer}>
            <Avatar size={60} src={ava} icon={<UserOutlined/>}/>
            <div>{name}</div>
        </div>
    );
}