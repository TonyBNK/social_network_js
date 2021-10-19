import React from "react";
import c from './Users.module.css';
import catUser from '../../images/catUser.png';
import {NavLink} from "react-router-dom";


export const Users = React.memo((
    {
        users,
        currentPage,
        pageSize,
        usersTotalCount,
        follow,
        unfollow,
        followingInProgress,
        requestUsers
    }
) => {
    const usersList = users.map(u => {
            return <div>
                <div className={c.user} key={u.id}>
                    <NavLink to={'/profile/' + u.id}>
                        <img
                            src={u.photos.small ? u.photos.small : catUser}
                            alt="ava"
                        />
                    </NavLink>
                    {
                        u.followed
                            ? <button
                                disabled={followingInProgress.some(id => id === u.id)}
                                onClick={() => unfollow(u.id)}>
                                Unfollow
                            </button>
                            : <button
                                disabled={followingInProgress.some(id => id === u.id)}
                                onClick={() => follow(u.id)}>
                                Follow
                            </button>
                    }
                    <div className={c.body}>
                        <div className={c.name}>
                            {u.name}
                        </div>
                        <div className={c.text}>
                            {u.status}
                        </div>
                        <div className={c.address}>
                            {'u.address.country'}, {'u.address.city'}
                        </div>
                    </div>
                </div>
            </div>
        }
    );

    const pagesCount = Math.ceil(usersTotalCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const pagesList = pages.map(p => {
        const onChangeCurrentPageHandler = () => {
            requestUsers(p, pageSize);
        }

        return (
            <span
                className={currentPage === p && c.pageSelected}
                onClick={onChangeCurrentPageHandler}
            >
                {p}
            </span>
        )
    });

    return (
        <div className={c.users}>
            <div className={c.title}>
                <h3>Users</h3>
                {pagesList}
            </div>
            <span>
                {usersList}
            </span>
            <button className={c.show}>
                Show more
            </button>
        </div>
    )
});