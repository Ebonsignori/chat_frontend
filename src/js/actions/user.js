import {openModal} from "./modals";
import {USER_LOGGED_IN, USER_LOGGED_OUT} from "../constants/action_types";
import {postObject} from "../utility/post";
import {socket} from "../index";

export function userLogIn(user_object) {
    socket.connect();

    return {
        type: USER_LOGGED_IN,
        account_name: user_object.account_name,
        first_name: user_object.first_name,
        last_name: user_object.last_name,
    }
}

export function userLogOut() {
    socket.disconnect();

    return async (dispatch) => {
        const response = await postObject("/users/logout", {
        }, {
            needs_credentials: true,
            return_response: true
        });
        if (response.status === 200) {
            dispatch({
                type: USER_LOGGED_OUT
            });
        }
    }
}

export function notLoggedIn() {
    return openModal("not_logged_in");
}