import React, { Component } from 'react';
import '../App.css';


class Card extends Component {
    render() {
        return (
            <div className="wizardCard">
                <img src=
                    {this.props.wizardPhoto || '../defaultimage.jpg'}
                    className="wizardImage"
                />
                <div className="wizardData">
                    <h2 className="wizardName">
                        {this.props.wizardName}
                    </h2>
                    <p className="wizardHouse">
                        {this.props.hogwartsHouse || 'SIN CASA'}
                    </p>
                </div>
            </div>
        )
    }
}

export default Card;