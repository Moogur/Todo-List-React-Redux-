"use strict";

import {SEARCH_TODO, SEARCH_FILTER} from "./const";

export const search = payload => ({
    type: SEARCH_TODO,
    payload
});

export const searchFilter = payload => ({
    type: SEARCH_FILTER,
    payload
});
