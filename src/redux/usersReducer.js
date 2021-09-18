const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const CHANGE_CURRENT_PAGE = 'CHANGE-CURRENT-PAGE';
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT';
const SET_FETCHING = 'SET-FETCHING';
const SET_FOLLOWING_PROGRESS = 'SET_FOLLOWING_PROGRESS';


const initialState = {
    users: [],
    currentPage: 1,
    pageSize: 10,
    usersTotalCount: 0,
    isFetching: false,
    followingInProgress: []
};

export const follow = (id) => ({type: FOLLOW, userId: id});
export const unfollow = (id) => ({type: UNFOLLOW, userId: id});
export const setUsers = (users) => ({type: SET_USERS, users});
export const changeCurrentPage = (currentPage) =>
    ({type: CHANGE_CURRENT_PAGE, currentPage});
export const setUsersTotalCount = (usersTotalCount) => ({
    type: SET_USERS_TOTAL_COUNT,
    usersTotalCount
});
export const setFetching = (isFetching) => ({type: SET_FETCHING, isFetching});
export const setFollowingProgress = (isFetching, buttonId) => ({
    type: SET_FOLLOWING_PROGRESS,
    isFetching,
    buttonId
})

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u =>
                    u.id === action.userId ? {...u, followed: true} : u
                )
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u =>
                    u.id === action.userId ? {...u, followed: false} : u
                )
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            };
        case CHANGE_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_USERS_TOTAL_COUNT:
            return {
                ...state,
                usersTotalCount: action.usersTotalCount
            };
        case SET_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case SET_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.buttonId]
                    : state.followingInProgress.filter(id => id !== action.buttonId)
            }
        default:
            return state;
    }
}

export default usersReducer;