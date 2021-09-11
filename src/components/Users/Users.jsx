import React from "react";
import c from './Users.module.css';
import axios from "axios";
import catUser from '../../img/catUser.png';

export const Users = (
    {
        users,
        followUnfollow,
        setUsers
    }
) => {
    if (users.length === 0) {
        debugger;
        axios.get(`https://social-network.samuraijs.com/api/1.0/users`).then(response => {
            setUsers(response.data.items);
        });
    }

    const usersList = users.map(u => {
            const onClickHandler = () => {
                followUnfollow(u.id);
            }

            return <div>
                <div className={c.user} key={u.id}>
                    <img src={u.photos.small? u.photos.small: catUser} alt="ava"/>
                    <button onClick={onClickHandler}>
                        {u.followed ? 'Unfollow' : 'Follow'}
                    </button>
                    <div className={c.body}>
                        <span className={c.name}>{u.name}</span>
                        <span className={c.text}>{u.status}</span>
                        <span
                            className={c.address}>{'u.address.country'}, {'u.address.city'}</span>
                    </div>
                </div>
            </div>
        }
    );

    return (
        <div className={c.users}>
            <h3>Users</h3>
            <span>{usersList}</span>
            <button className={c.show}>Show more</button>
        </div>
    )
}