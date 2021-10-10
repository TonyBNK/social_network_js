import {createSelector} from "reselect";


const getUsersSelector = (state) => {
    return state.usersPage.users;
}

export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(user => user);
});

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getUsersTotalCount = (state) => {
    return state.usersPage.usersTotalCount;
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
}


