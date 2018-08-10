import React, { Component } from 'react';

class Filter extends Component {
    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.props.value}
                    onChange={this.props.onChange}
                />
                <select onChange={this.props.onChangetwo}>
                    <option value="half-blood" >half-blood</option>
                    <option value="pure-blood">pure-blood</option>
                    <option value="muggleborn">muggleborn</option>
                </select>
            </div>
        )
    }
}

export default Filter;