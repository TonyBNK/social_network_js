const FOLLOW_UNFOLLOW = 'FOLLOW-UNFOLLOW';
const SET_USERS = 'SET-USERS';
const CHANGE_CURRENT_PAGE = 'CHANGE-CURRENT-PAGE';
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT';


const initialState = {
    users: [],
    currentPage: 2,
    pageSize: 5,
    usersTotalCount: 0
};


export const followUnfollowAC = (id) => ({type: FOLLOW_UNFOLLOW, userId: id});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const changeCurrentPageAC = (currentPage) =>
    ({type: CHANGE_CURRENT_PAGE, currentPage});
export const setUsersTotalCountAC = (usersTotalCount) => ({type: SET_USERS_TOTAL_COUNT, usersTotalCount});

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
            }
        default:
            return state;
    }
}

export default usersReducer;