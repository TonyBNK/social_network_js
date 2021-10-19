import {initializedSuccess} from "../actions/actions";
import {appReducer} from "./appReducer";


let initialState;

beforeEach(() => {
    initialState = {
        initialized: false
    }
});

test('initialized value should be true', () => {
   let newState = appReducer(initialState, initializedSuccess());

   expect(newState.initialized).toBeTruthy();
});