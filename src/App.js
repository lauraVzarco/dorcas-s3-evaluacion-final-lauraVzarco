import React, { Component } from 'react';
import './App.css';
import Filter from './Components/Filter';
import CharacterList from './Components/CharacterList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: []
    }
    this.fetchCharacters = this.fetchCharacters.bind(this)
  }

  fetchCharacters() {
    fetch('http://hp-api.herokuapp.com/api/characters')
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          info: json
        });
      })

  }

  componentDidMount() {
    this.fetchCharacters();
  }

  render() {

    return (
      <div>
        <Filter filter={this.state.info} />
        <CharacterList list={this.state.info} />
      </div>
    );
  }
}

export default App;
