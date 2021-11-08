import React from "react";
import c from './User.module.scss';
import {NavLink} from "react-router-dom";
import catUser from "../../../images/catUser.png";
import {Avatar, Button} from 'antd';


export const User = React.memo((
    {
        id,
        name,
        status,
        photo,
        isFollowed,
        follow,
        unfollow,
        followingInProgress,
    }
) => {
    return (
        <div className={c.userCard} key={id}>
            <NavLink to={'/profile/' + id}>
                <Avatar size={70} src={photo ? photo : catUser}/>
            </NavLink>
            <div className={status ? c.statusContainer : c.noStatus}>
                {status}
            </div>
            <div className={c.nameContainer}>
                {name}
            </div>
            {
                isFollowed
                    ? <Button type='primary' shape='round'
                        disabled={followingInProgress.some(userId => userId === id)}
                        onClick={() => unfollow(id)}>
                        Unfollow
                    </Button>
                    : <Button type='primary' shape='round'
                        disabled={followingInProgress.some(userId => userId === id)}
                        onClick={() => follow(id)}>
                        Follow
                    </Button>
            }
        </div>
    )
});
