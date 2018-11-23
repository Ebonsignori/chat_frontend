import {socket} from "../index";

export function emitNewMessage(message) {
    socket.emit("new_message", message);
}