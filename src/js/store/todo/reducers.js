"use strict";

import {ADD_ITEM, REMOVE_ITEM, DONE_ITEM, IMPORTANT_ITEM, CLASS_NAME} from "./const";

const initialState = [
    {title: "Learn React", important: true, done: true, className: "todo-list-item", id: Math.random().toString()},
    {title: "build Awesome App", important: true, done: true, className: "todo-list-item", id: Math.random().toString()},
    {title: "Have a Lunch", important: true, done: true, className: "todo-list-item", id: Math.random().toString()}
];

function getNewArray(arr, id, val, clazz = false) {
    let st = [...arr];
    st.forEach(item => {
        if (item.id === id) {
            clazz
                ? item.className = val
                : item[val]= !item[val];
        }
    });
    return st;
}

export default function(state = initialState, action) {
    switch(action.type) {
    case ADD_ITEM: {
        return [...state, action.payload];
    }
    case REMOVE_ITEM: {
        let st = [...state];
        st = st.filter(item => {
            return item.id !== action.id;
        });
        return st;
    }
    case DONE_ITEM: {
        return getNewArray(state, action.id, "done");
    }
    case IMPORTANT_ITEM: {
        return getNewArray(state, action.id, "important");
    }
    case CLASS_NAME: {
        return getNewArray(state, action.id, action.payload, true);
    }}
    return state;
}