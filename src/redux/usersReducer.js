const FOLLOW_UNFOLLOW = 'FOLLOW-UNFOLLOW';
const SET_USERS = 'SET-USERS';
const CHANGE_CURRENT_PAGE = 'CHANGE-CURRENT-PAGE';
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT';
const SET_FETCHING = 'SET-FETCHING';


const initialState = {
    users: [],
    currentPage: 2,
    pageSize: 5,
    usersTotalCount: 0,
    isFetching: false
};


export const followUnfollow = (id) => ({type: FOLLOW_UNFOLLOW, userId: id});
export const setUsers = (users) => ({type: SET_USERS, users});
export const changeCurrentPage = (currentPage) =>
    ({type: CHANGE_CURRENT_PAGE, currentPage});
export const setUsersTotalCount = (usersTotalCount) => ({type: SET_USERS_TOTAL_COUNT, usersTotalCount});
export const setFetching = (fetching) => ({type: SET_FETCHING, fetching});

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u =>
                    u.id === action.userId ? {...u, followed: !u.followed} : u
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
                isFetching: action.fetching
            }
        default:
            return state;
    }
}

export default usersReducer;