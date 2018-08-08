import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
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
        console.log(this.state)
      })

  }

  componentDidMount() {
    this.fetchCharacters();
  }

  render() {

    return (
      <div>
        <Header />
        <CharacterList list={info} />
      </div>
    );
  }
}

export default App;
