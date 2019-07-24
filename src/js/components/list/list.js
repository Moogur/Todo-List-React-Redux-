"use strict";

import "./list.sass";

import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import ListItems from "../list-items";
import {removeItem, doneItem, importantItem, setClassName} from "../../store/todo/action";
import {addDoneItem, addAllItem, addImportatnItem} from "../../store/statistics/actions";

class List extends React.Component {
    static propTypes = {
        removeItem: PropTypes.func.isRequired,
        addAllItem: PropTypes.func.isRequired,
        list: PropTypes.arrayOf.isRequired,
        addDoneItem: PropTypes.func.isRequired,
        addImportatnItem: PropTypes.func.isRequired,
        doneItem: PropTypes.func.isRequired,
        importantItem: PropTypes.func.isRequired,
        setClassName: PropTypes.func.isRequired
    }

    render() {
        const liItems = this.props.list.map((item) => {
            return pug`
                li.list-item(className="list-group-item", key=${item.id})
                    ListItems(
                        text=${{...item}},
                        del=${this.props.removeItem.bind(this, item.id)},
                        addAllItem=${() => this.props.addAllItem(-1)},
                        addDoneItem=${num => this.props.addDoneItem(num)},
                        addImportatnItem=${num => this.props.addImportatnItem(num)},
                        doneItem=${this.props.doneItem.bind(this, item.id)},
                        importantItem=${this.props.importantItem.bind(this, item.id)},
                        setClassName=${text => this.props.setClassName(item.id, text)},
                    )
            `;
        });

        return pug`
            ul(className="todo-list list-group")
                ${liItems}
        `;
    }
}

const getState = state => {
    let list;
    switch (state.search.filter) {
    case "all": {
        list = state.todo;
        break;
    }
    case "active": {
        list = state.todo.filter(item => item.done);
        break;
    }
    case "done": {
        list = state.todo.filter(item => !item.done);
        break;
    }}
    list = list.filter(item => item.title.toLowerCase().includes(state.search.search.toLowerCase()));
    return {list};
};

const setState = {
    removeItem,
    doneItem,
    importantItem,
    addDoneItem,
    addImportatnItem,
    addAllItem,
    setClassName
};

export default connect(getState, setState)(List);