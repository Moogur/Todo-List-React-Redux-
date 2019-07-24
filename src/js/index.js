"use strict";

import React from "react";
import ReactDom from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";

import App from "./components/app";
import rootReducers from "./store";

const store = createStore(rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDom.render(
    pug`
        Provider(store=${store})
            App
    `,
    document.querySelector("#root")
);
