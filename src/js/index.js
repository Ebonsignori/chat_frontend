import React from "react";
import { render } from "react-dom";

import {App} from "./components/App";
import {initSocket} from "./socket/socket";

export const socket = initSocket();

// Insert react app into top-level html DOM
render(
    <App />,
    document.getElementById("root")
);