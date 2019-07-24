"use strict";

import {ALL_DONE_ITEM, ALL_ITEM, ALL_IMPORTANT_ITEM} from "./const";

const initialStore = {
    all: 3,
    done: 0,
    important: 0
};

export default function (state = initialStore, action) {
    switch(action.type) {
    case ALL_DONE_ITEM: {
        const st = {...state};
        st.done += parseInt(action.payload);
        return st;
    }
    case ALL_IMPORTANT_ITEM: {
        const st = {...state};
        st.important += parseInt(action.payload);
        return st;
    }
    case ALL_ITEM: {
        const st = {...state};
        st.all += parseInt(action.payload);
        return st;
    }}
    return state;
}