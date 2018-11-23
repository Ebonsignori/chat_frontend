import io from 'socket.io-client';
import {WEBSOCKET_URL, WEBSOCKET_TIMEOUT} from "../config/config";
import {WEBSOCKET_ACTIONS} from "../constants/action_types";

export function initSocket(store) {
    // Initialize socket-io object
    const socket = io(WEBSOCKET_URL, {
        transports: ['websocket'],
        timeout: WEBSOCKET_TIMEOUT,
        autoConnect: false,
    });

    // Generate iterable websocket actions object
    const websocket_actions = Object.keys(WEBSOCKET_ACTIONS).reduce((memo, key) => {
        memo[key] = key;
        return memo;
    }, {});


    // Add an event listener for every websocket action. Each listener fires a redux store dispatch with payload contents
    Object.keys(websocket_actions).forEach(type =>
        socket.on(WEBSOCKET_ACTIONS[type], payload => {
                // console.log(WEBSOCKET_ACTIONS[type]);
                // console.log(payload);
                store.dispatch({type: type, date: new Date(), payload});
            }
        )
    );

    socket.connect();

    return socket;
}