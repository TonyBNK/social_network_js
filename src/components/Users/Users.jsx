import React from "react";
import c from './Users.module.scss';
import catUser from '../../images/catUser.png';
import {NavLink} from "react-router-dom";
import {Paginator} from "./Paginator/Paginator";
import {User} from "./User/User";


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
            return <User
                id={u.id}
                name={u.name}
                status={u.status}
                photo={u.photos.small}
                isFollowed={u.followed}
                follow={follow}
                unfollow={unfollow}
                followingInProgress={followingInProgress}
            />
        }
    );

    return (
        <div className={c.users}>
            <div className={c.title}>
                <h3>Users</h3>
                <Paginator
                    currentPage={currentPage}
                    pageSize={pageSize}
                    usersTotalCount={usersTotalCount}
                    requestUsers={requestUsers}
                />
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