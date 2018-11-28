import io from 'socket.io-client';
import {SERVER_URL, WEBSOCKET_TIMEOUT} from "../config/config";
import {WEBSOCKET_ACTIONS, WS_USER_NOT_LOGGED_IN} from "../constants/action_types";
import {notLoggedIn} from "../actions/user";

export function initSocket(store) {
    // Initialize socket-io object
    const socket = io(SERVER_URL, {
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

                if (type === WS_USER_NOT_LOGGED_IN) {
                    console.log("Here!");
                    store.dispatch(notLoggedIn());
                } else {
                    store.dispatch({type: type, date: new Date(), payload});
                }
            }
        )
    );

    return socket;
}