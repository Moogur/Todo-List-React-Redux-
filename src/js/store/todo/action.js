"use strict";

import {ADD_ITEM, REMOVE_ITEM, DONE_ITEM, IMPORTANT_ITEM, CLASS_NAME} from "./const";

export const addItem = payload => ({
    type: ADD_ITEM,
    payload
});

export const removeItem = id => ({
    type: REMOVE_ITEM,
    id
});

export const doneItem = id => ({
    type: DONE_ITEM,
    id
});

export const importantItem = id => ({
    type: IMPORTANT_ITEM,
    id
});

export const setClassName = (id, payload) => ({
    type: CLASS_NAME,
    payload,
    id
});