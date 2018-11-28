import {USER_LOGGED_IN, USER_LOGGED_OUT} from "../constants/action_types";
const initial_state = {
    is_logged_in: false,
    account_name: undefined,
    first_name: undefined,
    last_name: undefined,
};

// Tokens reducer
export function userReducer(state=initial_state, action) {
    switch (action.type) {
        case USER_LOGGED_IN:
            return {
                ...state,
                is_logged_in: true,
                account_name: action.account_name,
                first_name: action.first_name,
                last_name: action.last_name
            };
        case USER_LOGGED_OUT:
            return {
                ...state,
                is_logged_in: false,
                account_name: undefined,
                first_name: undefined,
                last_name: undefined
            };

        default:
            return state;
    }
}