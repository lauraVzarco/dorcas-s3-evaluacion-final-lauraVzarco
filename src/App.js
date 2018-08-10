import React, { Component } from 'react';
import './App.css';
import Filter from './Components/Filter';
import CharacterList from './Components/CharacterList';
import Character from './Components/Character'
import { Route, Switch } from 'react-router-dom';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            inputFilterValue: '',
            selectValue: ''
        }
        this.fetchCharacters = this.fetchCharacters.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
        this.handleSelect = this.handleSelect.bind(this)
    }

    // fectch de la api
    componentDidMount() {
        this.fetchCharacters();
    }


    fetchCharacters() {
        fetch('https://hp-api.herokuapp.com/api/characters')
            .then((response) => response.json())
            .then((json) => {
                const listWithIds = json.map((wizard, i) => ({ ...wizard, id: '' + i })
                )
                this.setState({
                    list: listWithIds
                });
            })
    }

    //filtro
    handleFilter(event) {
        this.setState({
            inputFilterValue: event.target.value
        });
    }

    handleSelect(event) {
        this.setState({
            selectValue: event.target.value
        });
        console.log('hola')
    }

    render() {
        const filteredList = this.state.list
            .filter((wizard) => wizard.name.toLowerCase().includes(this.state.inputFilterValue.toLowerCase()))
            .filter((wizard) => wizard.ancestry.includes(this.state.selectValue));
        return (
            <div>
                <header>
                    <h1 className="titlePage"> Harry Potter Characters </h1>
                </header>
                <main>
                    <Switch>
                        <Route
                            exact path='/'
                            render={() =>
                                <div className="contentPage">
                                    <Filter
                                        value={this.state.inputFilterValue}
                                        onChange={this.handleFilter}
                                        valuetwo={this.state.selectValue}
                                        onChangetwo={this.handleSelect} />
                                    <CharacterList
                                        className="listPage"
                                        list={filteredList}
                                    />
                                </div>}
                        />
                        <Route
                            path='/character/:id'
                            render={(props) => {
                                const id = props.match.params.id;
                                console.log(props.match);
                                const character = this.state.list.find((wizard) => wizard.id === id)
                                return (
                                    <Character
                                        wizardPhoto={character.image}
                                        wizardName={character.name}
                                        hogwartsHouse={character.house}
                                        wizardYear={character.yearOfBirth}
                                        wizardPatronus={character.patronus}
                                        wizardIsAlive={character.alive}
                                    />
                                )
                            }} />
                    </Switch>

                </main>
            </div>
        );
    }
}

export default App;
