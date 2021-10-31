import {SET_EDIT_MODE, SET_INITIALIZED} from "../actions/actions";


const initialState = {
    isInitialized: false,
    editMode: false
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                isInitialized: true
            }
        case SET_EDIT_MODE:
            return {
                ...state,
                editMode: action.isEdit
            }
        default:
            return state;
    }
}