const FOLLOW_UNFOLLOW = 'FOLLOW-UNFOLLOW';
const SET_USERS = 'SET-USERS';

const initialState = {
    users: []
};

export const followUnfollowAC = (id) => ({type: FOLLOW_UNFOLLOW, userId: id});
export const setUsersAC = (users) => ({type: SET_USERS, users});

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
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}

export default usersReducer;