import {WS_EXISTING_MESSAGES, WS_NEW_MESSAGE} from "../constants/action_types";

const initial_state = {
    messages: []
};

// Tokens reducer
export function chatReducer(state=initial_state, action) {
    switch (action.type) {
        case WS_NEW_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.payload]
            };
        case WS_EXISTING_MESSAGES:
            return {
                ...state,
                messages: action.payload
            };
        default:
            return state;
    }
}