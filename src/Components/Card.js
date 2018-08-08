import React, { Component } from 'react';


class Card extends Component {
    render() {
        return (
            <div>
                <img src=
                    {this.props.wizardPhoto === ""
                        ? '../defaultimage.jpg'
                        :
                        this.props.wizardPhoto}
                />
                <h2>
                    {this.props.wizardName}
                </h2>
                <p>
                    {this.props.hogwartsHouse === ""
                        ? 'SIN CASA' :
                        this.props.hogwartsHouse
                    } </p>
            </div>
        )
    }
}

export default Card;