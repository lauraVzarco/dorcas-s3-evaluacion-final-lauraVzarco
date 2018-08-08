import React, { Component } from 'react';
import './App.css';
import Filter from './Components/Filter';
import CharacterList from './Components/CharacterList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputFilterValue: ''
    }
    this.fetchCharacters = this.fetchCharacters.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  // fectch de la api
  componentDidMount() {
    this.fetchCharacters();
  }


  fetchCharacters() {
    fetch('http://hp-api.herokuapp.com/api/characters')
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          list: json
        });
      })
  }

  //filtro
  handleFilter(event) {
    this.setState({
      inputFilterValue: event.target.value
    });
  }

  render() {
    const filteredList = this.state.list.filter((wizard) => wizard.name.toLowerCase().includes(this.state.inputFilterValue.toLowerCase()));
    return (
      <div>
        <header>
          <h1> Harry Potter Characters </h1>
        </header>
        <main>
          <Filter value={this.state.inputFilterValue} onChange={this.handleFilter} />
          <CharacterList list={filteredList} />
        </main>
      </div>
    );
  }
}

export default App;
