import React, { Component } from 'react';
import '../Detail.css';
import { Link } from 'react-router-dom';



class Character extends Component {
    render() {
        return (
            <div className="detail">
                <div className="detailCard">
                    <img className="detailPhoto" src={this.props.wizardPhoto} />
                    <div classname="dataDetail">
                        <h2 className="detailName">
                            {this.props.wizardName}
                        </h2>
                        <p className="detailHouse">
                            Casa: {this.props.hogwartsHouse || 'SIN CASA'}
                        </p>
                        <p className="detailYear">
                            Nacimiento: {this.props.wizardYear || 'Nacimiento Desconocido'}
                        </p>
                        <p className="detailPatronus">
                            Patronus: {this.props.wizardPatronus || 'Patronus Desconocido'}
                        </p>
                        <p className="detailAlive">
                            Estado: {this.props.wizardIsAlive ? 'Vivo' : 'Muerto'}
                        </p>
                    </div>
                </div>
                <Link to={'/'}><div> Volver </div> </Link>
            </div>
        )
    }
}

export default Character;