import React from "react";
import {connect} from "react-redux";
import {
    changeCurrentPage, follow, unfollow, setFetching,
    setUsers, setUsersTotalCount
} from "../../redux/usersReducer";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../Preloader/Preloader";


class UsersContainer extends React.Component {
    componentDidMount() {
        if (!this.props.users.length) {
            this.props.setFetching(true);
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,{
                    withCredentials: true
                })
                .then(response => {
                    this.props.setFetching(false);
                    this.props.setUsers(response.data.items);
                    this.props.setUsersTotalCount(response.data.totalCount);
                });
        }
    }

    changeCurrentPage = (page) => {
        this.props.changeCurrentPage(page);
        this.props.setFetching(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`, {
                withCredentials: true
            })
            .then(response => {
                this.props.setFetching(false);
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return <div>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                users={this.props.users}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                usersTotalCount={this.props.usersTotalCount}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                changeCurrentPage={this.changeCurrentPage}
            />
        </div>
    }
}

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
    usersTotalCount: state.usersPage.usersTotalCount,
    isFetching: state.usersPage.isFetching
});

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    changeCurrentPage,
    setUsersTotalCount,
    setFetching
})(UsersContainer);