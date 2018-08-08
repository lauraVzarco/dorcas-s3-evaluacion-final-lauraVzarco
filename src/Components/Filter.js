import React, { Component } from 'react';

class Filter extends Component {
    render() {
        const wizardFilter = this.props.filter;
        console.log('array en el filtro', wizardFilter);
        return (
            <div>
                <h1> Harry Potter Characters </h1>
                <input type="text" />
            </div>

        )
    }
}

export default Filter;