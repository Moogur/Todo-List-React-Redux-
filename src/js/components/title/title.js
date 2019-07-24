"use strict";

import "./title.sass";
import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

class Title extends React.PureComponent {
    static propTypes = {
        stats: PropTypes.objectOf.isRequired
    }

    render() {
        const {all, done, important} = this.props.stats;
        return pug`
            div.app-header(className="d-flex")
                h2 Todo List
                h3 ${all} items, ${done} done, ${important} important
        `;
    }
}

const getState = state => ({
    stats: state.statistics
});

export default connect(getState, null)(Title);

