import {setFollowingProcess} from "../bll/actions/actions";

export const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    try {
        dispatch(setFollowingProcess(true, userId));
        const data = await apiMethod(userId);
        if (data.resultCode === 0) {
            dispatch(actionCreator(userId));
        }
        dispatch(setFollowingProcess(false, userId));
    } catch (e) {
        console.log(e);
    }
}