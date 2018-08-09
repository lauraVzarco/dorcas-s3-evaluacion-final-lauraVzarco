import React, { Component } from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';
import '../App.css';


class CharacterList extends Component {

    render() {
        const list = this.props.list;
        const potterList = list.map((wizard) => {
            return (
                <li key={wizard.id} className="liCard">
                    <Link className="cardLink" to={'/character/' + wizard.id}>
                        <Card
                            className="wizardCard"
                            wizardPhoto={wizard.image}
                            wizardName={wizard.name}
                            hogwartsHouse={wizard.house}
                        />
                    </Link>
                </li>
            )
        });

        return (
            <div>
                <ul class="listChara">
                    {potterList}
                </ul>
            </div>
        )
    }
}

export default CharacterList;