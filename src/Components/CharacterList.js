import React, { Component } from 'react';
import Card from './Card';

class CharacterList extends Component {

    render() {
        let potterChar = this.props.list;
        const potterList = potterChar.map((data, i) => {
            return (
                <li key={i}>
                    <Card
                        wizardPhoto={data.image}
                        wizardName={data.name}
                        hogwartsHouse={data.house}
                    />
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