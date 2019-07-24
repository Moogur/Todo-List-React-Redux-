"use strict";

import {combineReducers} from "redux";

import todo from "./todo/reducers";
import search from "./search/reducers";
import statistics from "./statistics/reducers";

export default combineReducers({
    todo,
    search,
    statistics
});