import React from "react";
import c from './Users.module.scss';
import {User} from "./User/User";
import {Button, Pagination} from "antd";


export const Users = React.memo((
    {
        users,
        currentPage,
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

    const onChange = (currentPage, pageSize) => {
        requestUsers(currentPage, pageSize);
    };

    return (
        <div className={c.usersContainer}>
            <div className={c.titleContainer}>
                Users
            </div>
            <div className={c.bodyContainer}>
                {usersList}
            </div>
            <div className={c.moreUsersContainer}>
                <Button type='primary' shape='round' size='large'>
                    Show more
                </Button>
                <Pagination current={currentPage} onChange={onChange}
                            total={usersTotalCount} onShowSizeChange={onChange}/>
            </div>
        </div>
    )
});