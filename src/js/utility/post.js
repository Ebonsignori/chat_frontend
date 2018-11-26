import {SERVER_URL} from "../config/config";

export async function postObject(uri, send_object) {
    const response = await fetch(SERVER_URL + uri, {
                        method: "POST",
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(send_object)
                    });

    if (response.ok) {
        console.log("Successful response!");
    } else {
        console.log("Failed response");
    }

    return response;
}