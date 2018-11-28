// =======================
// Modal Management
// =======================
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

// =======================
// Websocket
// =======================
// Websocket connection status
export const WS_CONNECT = "WS_CONNECT";
export const WS_DISCONNECT = "WS_DISCONNECT";

// Websocket subscription status
export const WS_SUBSCRIBE = "WS_SUBSCRIBE";
export const WS_UNSUBSCRIBE = "WS_UNSUBSCRIBE";

// Chat
export const WS_NEW_MESSAGE = "WS_NEW_MESSAGE";
export const WS_EXISTING_MESSAGES = "WS_EXISTING_MESSAGES";

// User
export const USER_LOGGED_IN = "USER_LOGGED_IN";
export const USER_LOGGED_OUT = "USER_LOGGED_OUT";
export const WS_USER_NOT_LOGGED_IN = "WS_USER_NOT_LOGGED_IN";

/* Websocket action emit listeners
*  The key of each WEBSOCKET_ACTION corresponds to the Redux action identifier --- i.e. WS_CONNECT
*  The value of each WEBSOCKET_ACTION corresponds to the socket.io event listener --- i.e. socket.on('connect')
 */
export const WEBSOCKET_ACTIONS = {
    // Websocket connection status
    WS_CONNECT: "connect",
    WS_DISCONNECT: "disconnect",

    // Websocket subscription status
    WS_SUBSCRIBE: "subscribed",
    WS_UNSUBSCRIBE: "unsubscribed",

    // Chat
    WS_NEW_MESSAGE: "new_message",
    WS_EXISTING_MESSAGES: "existing_messages",

    // User
    WS_USER_NOT_LOGGED_IN: "user_not_logged_in"
};