import {setAuthenticated} from "../actions/actions";
import {authReducer} from "./authReducer";

let initialState;

beforeEach(() => {
    initialState = {
        userId: null,
        login: null,
        email: null,
        isAuth: false
    }
});

test('state should be initialized with profile data', () => {
    let newState = authReducer(initialState, setAuthenticated(
        '1', 'tony', 'tony@mail.ru', true)
    );

    expect(newState.userId).toBe('1');
    expect(newState.login).toBe('tony');
    expect(newState.email).toBe('tony@mail.ru');
    expect(newState.isAuth).toBeTruthy();
});