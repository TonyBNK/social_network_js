import React from "react";
import c from './Users.module.css';
import axios from "axios";
import catUser from '../../img/catUser.png';

export class Users extends React.Component {
    componentDidMount() {
        if (!this.props.users.length) {
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items);
                    this.props.setUsersTotalCount(response.data.totalCount);
                });
        }
    }

    render() {
        const usersList = this.props.users.map(u => {
                const onClickHandler = () => {
                    this.props.followUnfollow(u.id);
                }

                return <div>
                    <div className={c.user} key={u.id}>
                        <img
                            src={u.photos.small ? u.photos.small : catUser}
                            alt="ava"
                        />
                        <button onClick={onClickHandler}>
                            {u.followed ? 'Unfollow' : 'Follow'}
                        </button>
                        <div className={c.body}>
                            <div className={c.name}>{u.name}</div>
                            <div className={c.text}>{u.status}</div>
                            <div
                                className={c.address}>{'u.address.country'}, {'u.address.city'}
                            </div>
                        </div>
                    </div>
                </div>
            }
        );

        const pagesCount = Math.ceil(this.props.usersTotalCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        const pagesList = pages.map(p => {
            const onChangeCurrentPageHandler = () => {
                this.props.changeCurrentPage(p);
                axios
                    .get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
                    .then(response => this.props.setUsers(response.data.items));
            }

            return (
                <span
                    className={this.props.currentPage === p && c.pageSelected}
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
}