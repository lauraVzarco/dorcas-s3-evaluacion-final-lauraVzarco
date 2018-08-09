import React, { Component } from 'react';

class Filter extends Component {
    render() {
        return (
            <input
                type="text"
                value={this.props.value}
                onChange={this.props.onChange}
            />
        )
    }
}

export default Filter;