import {
    CHANGE_CURRENT_PAGE,
    FOLLOW,
    SET_FETCHING,
    SET_FOLLOWING_PROCESS,
    SET_USERS_TOTAL_COUNT,
    SHOW_USERS,
    UNFOLLOW
} from "../actions/actions";
import {updateObjectInArray} from "../../utils/utils";


const initialState = {
    users: [],
    currentPage: 1,
    pageSize: 10,
    usersTotalCount: 0,
    isFetching: false,
    followingInProgress: []
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }
        case SHOW_USERS:
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
        case SET_FOLLOWING_PROCESS:
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