import { combineReducers } from "redux"

import {chatReducer} from "./chat"
import {websocketReducer} from "./socket";
import {modalsReducer} from "./modals";

// Combine all reducers and export them for store
export const all_reducers = combineReducers({
    chat: chatReducer,
    socket: websocketReducer,
    modals: modalsReducer,
});

