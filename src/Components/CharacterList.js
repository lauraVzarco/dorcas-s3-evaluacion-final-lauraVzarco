import React, { Component } from 'react';
import Card from './Card';

class CharacterList extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>  <Card /> </li>
                </ul>
            </div>
        )
    }
}

export default CharacterList;