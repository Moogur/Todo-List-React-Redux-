"use strict";

import {ALL_DONE_ITEM, ALL_ITEM, ALL_IMPORTANT_ITEM} from "./const";

export const addDoneItem = payload => ({
    type: ALL_DONE_ITEM,
    payload
});

export const addImportatnItem = payload => ({
    type: ALL_IMPORTANT_ITEM,
    payload
});


export const addAllItem = payload => ({
    type: ALL_ITEM,
    payload
});