import identifier_json from "./identifier.json"

// ============================================
// Websocket config
// ============================================
export let SERVER_URL;
if (identifier_json.environ === "local") {
    SERVER_URL = "http://localhost:3000";
} else {
    SERVER_URL = "http://bebe.group:8080";
}

export const WEBSOCKET_TIMEOUT = 10000;
