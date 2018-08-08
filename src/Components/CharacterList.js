import React, { Component } from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';


class CharacterList extends Component {

    render() {
        const list = this.props.list;
        const potterList = list.map((wizard) => {
            return (
                <li key={wizard.id}>
                    <Link to={'/character/' + wizard.id}>
                        <Card
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
                <ul>
                    {potterList}
                </ul>
            </div>
        )
    }
}

export default CharacterList;