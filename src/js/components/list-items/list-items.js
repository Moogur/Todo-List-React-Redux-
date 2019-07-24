"use strict";

import "./list-items.sass";
import React from "react";
import PropTypes from "prop-types";

export default class ListItems extends React.Component {
    static propTypes = {
        text: PropTypes.objectOf.isRequired,
        del: PropTypes.func.isRequired,
        doneItem: PropTypes.func.isRequired,
        importantItem: PropTypes.func.isRequired,
        addAllItem: PropTypes.func.isRequired,
        addDoneItem: PropTypes.func.isRequired,
        addImportatnItem: PropTypes.func.isRequired,
        setClassName: PropTypes.func.isRequired
    }

    important = () => {
        let className = this.props.text.className;
        if (!this.props.text.important) {
            this.props.addImportatnItem(-1);
            className = className.replace(/ important/, "");
        } else {
            this.props.addImportatnItem(1);
            className += " important";
        }
        this.props.setClassName(className);
        this.props.importantItem();
    }

    done = () => {
        let className = this.props.text.className;
        if (!this.props.text.done) {
            this.props.addDoneItem(-1);
            className = className.replace(/ done/, "");
        } else {
            this.props.addDoneItem(1);
            className += " done";
        }
        this.props.setClassName(className);
        this.props.doneItem();
    }

    delete = () => {
        this.props.del();
        this.props.addAllItem();
        if (!this.props.text.done) {
            this.props.addDoneItem(-1);
        }
        if (!this.props.text.important) {
            this.props.addImportatnItem(-1);
        }
    }

    render() {
        return pug`
            span(styleName=${this.props.text.className})
                span.todo-list-item-label(
                    onClick=${this.done}
                ) ${this.props.text.title}

                button(
                    className="btn btn-outline-success btn-sm float-right fa fa-exclamation",
                    onClick=${this.important}
                )

                button.right(
                    className="btn btn-outline-danger btn-sm float-right fa fa-trash-o",
                    onClick=${this.delete}
                )
        `;
    }
}

