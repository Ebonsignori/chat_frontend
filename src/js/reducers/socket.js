import {WS_CONNECT, WS_DISCONNECT} from "../constants/action_types";

const initial_state = {
    status: 'disconnected',
};

// Websocket reducer
export function websocketReducer(state = initial_state, action) {
    switch (action.type) {
        case WS_CONNECT:
            return {
                ...state,
                status: 'connected',
            };
        case WS_DISCONNECT:
            return {
                ...state,
                status: 'disconnected',
            };
        default:
            return state;
    }
}

