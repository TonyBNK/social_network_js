import React from "react";
import c from './Users.module.css';
import catUser from '../../img/catUser.png';
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";


export const Users = (
    {
        users,
        currentPage,
        pageSize,
        usersTotalCount,
        follow,
        unfollow,
        changeCurrentPage,
        followingInProgress,
        setFollowingProgress
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
                                onClick={() => {
                                    setFollowingProgress(true, u.id);
                                    usersAPI.unfollowUser(u.id).then(data => {
                                        if (data.resultCode === 0) {
                                            unfollow(u.id);
                                        }
                                        setFollowingProgress(false, u.id);
                                    })
                                }
                                }>Unfollow</button>
                            : <button
                                disabled={followingInProgress.some(id => id === u.id)}
                                onClick={() => {
                                    setFollowingProgress(true, u.id);
                                    usersAPI.followUser(u.id).then(data => {
                                        if (data.resultCode === 0) {
                                            follow(u.id);
                                        }
                                        setFollowingProgress(false, u.id);
                                    })
                                }
                                }>Follow</button>
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
            changeCurrentPage(p);
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
}