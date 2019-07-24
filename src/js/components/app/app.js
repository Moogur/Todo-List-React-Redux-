"use strict";

import "./app.sass";

import React from "react";

import Title from "../title";
import Search from "../search";
import List from "../list";
import AddItem from "../add-item";

export default class App extends React.PureComponent {
    render() {
        return pug`
            .todo-app
                Title

                Search

                List

                AddItem
        `;
    }
}