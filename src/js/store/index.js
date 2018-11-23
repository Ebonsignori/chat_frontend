import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { all_reducers } from "../reducers/index";
import {initSocket} from "../socket/socket";

export function initStore() {
    // Configure thunk middleware for socket.io
    const emit = (type, payload) => socket.emit(type, payload);
    const thunk_middle = thunk.withExtraArgument({emit: emit});

    // Logger middleware (defaults)
    const logger_middle = logger;

    // Apply middleware and reducers to store
    const middleware = applyMiddleware(thunk_middle, logger_middle);
    const store = createStore(all_reducers, middleware);

    // Initialize Socket
    const socket = initSocket(store);

    // TODO: For accessing store in dev console (remove in production)
    window.store = store;

    return [socket, store];
}