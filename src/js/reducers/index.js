import { combineReducers } from "redux"

import {chatReducer} from "./chat"
import {websocketReducer} from "./socket";
import {modalsReducer} from "./modals";
import {userReducer} from "./user";

// Combine all reducers and export them for store
export const all_reducers = combineReducers({
    chat: chatReducer,
    socket: websocketReducer,
    modals: modalsReducer,
    user: userReducer,
});

