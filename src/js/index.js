import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import './config/global.css'

import {App} from "./components/App";
import {initStore} from "./store";

export const [socket, store] = initStore();

// Insert react app, wrapped by redux provider, into top-level html DOM
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);