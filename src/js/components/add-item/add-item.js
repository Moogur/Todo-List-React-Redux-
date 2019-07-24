"use strict";

import "./add-item.sass";
import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {addItem} from "../../store/todo/action";
import {addAllItem} from "../../store/statistics/actions";

class AddItem extends React.Component {
    static propTypes = {
        addItem: PropTypes.func.isRequired,
        addAllItem: PropTypes.func.isRequired
    }

    state = {
        content: ""
    };

    change = e => {
        this.setState({content: e.target.value});
    }

    add = e => {
        e.preventDefault();
        if (this.state.content !== "") {
            this.props.addItem({
                title: this.state.content,
                important: true,
                done: true,
                className: "todo-list-item",
                id: Math.random().toString()
            });
            this.props.addAllItem(1);
        }
        this.setState({content: ""});
    }

    render() {
        const {content} = this.state;

        return pug`
            form.bottom-panel(className="d-flex")
                input.new-todo-label(
                    className="form-control",
                    type="text",
                    placeholder="What needs to be done?",
                    onChange=${this.change},
                    value=${content}
                )

                button(
                    className="btn btn-outline-secondary",
                    onClick=${this.add}
                ) Add
        `;
    }
}

const setState = {
    addItem,
    addAllItem
};

export default connect(null, setState)(AddItem);