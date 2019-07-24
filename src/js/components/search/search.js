"use strict";

import "./search.sass";

import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {search, searchFilter} from "../../store/search/actions";

class Search extends React.Component {
    static propTypes = {
        search: PropTypes.func.isRequired,
        searchFilter: PropTypes.func.isRequired,
        getSearch: PropTypes.objectOf.isRequired
    }

    buttons = [
        {id: "all", label: "All"},
        {id: "done", label: "Done"},
        {id: "active", label: "Active"}
    ]

    find = e => {
        this.props.search(e.target.value);
    }

    filter = (e) => {
        let id = e.target.id;
        if (id !== this.props.getSearch.filter) {
            this.props.searchFilter(id);
        }
    }

    render() {
        const bnts = this.buttons.map(({id, label}) => {
            const isActive = this.props.getSearch.filter === id;
            return pug`
                button(
                    className=${isActive ? 'btn btn-info' :'btn btn-outline-info'},
                    key=${id},
                    onClick=${this.filter},
                    id=${id}
                ) ${label}
            `;
        });

        return pug`
            div.search-panel(className="d-flex")
                input.search-input(
                        className="form-control",
                        type="text",
                        placeholder="type to search",
                        onChange=${this.find}
                        value=${this.props.getSearch.search}
                    )

                div.search-panel(
                    className="btn-group",
                    role="group",
                    aria-label="Basic example"
                    ) ${bnts}
        `;
    }
}

const getState = state => ({
    getSearch: state.search
});

const setState = {
    search,
    searchFilter
};

export default connect(getState, setState)(Search);