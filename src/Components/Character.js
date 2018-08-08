import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Character extends Component {
    render() {
        return (
            <div>
                <img src={this.props.wizardPhoto} />
                <p> {this.props.wizardName} </p>
                <p> Casa: {this.props.hogwartsHouse || 'SIN CASA'}</p>
                <p> Nacimiento: {this.props.wizardYear || 'Nacimiento Desconocido'}</p>
                <p> Patronus: {this.props.wizardPatronus || 'Patronus Desconocido'}</p>
                <p> Estado: {this.props.wizardIsAlive ? 'Vivo' : 'Muerto'}</p>
                <Link to={'/'}><div> Volver </div> </Link>
            </div>
        )
    }
}

export default Character;