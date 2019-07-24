"use strict";

import {SEARCH_TODO, SEARCH_FILTER} from "./const";

const initialState = {
    search: "",
    filter: "all"
};

export default function (state = initialState, action) {
    switch(action.type) {
    case SEARCH_TODO: {
        return {...state, search: action.payload};
    }
    case SEARCH_FILTER: {
        return {...state, filter: action.payload};
    }}
    return state;
}