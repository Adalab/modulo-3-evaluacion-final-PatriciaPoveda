import React from "react";
import "./App.scss";
import getApi from "../services/api";
import CharacterList from "./CharacterList";
import Header from "./Header";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      filterCharacters: "",
      listFilter: [],
    };
  }

  componentDidMount() {
    getApi().then((data) => {
      this.setState({
        characters: data,
        listFilter: data,
      });
    });
  }
  handleFilter = (inputValue) => {
    this.setState(
      {
        filterCharacters: inputValue,
      },
      () => {
        this.filterData();
      }
    );
  };
  filterData() {
    const filterPerson = this.state.characters.filter((character) => {
      return character.name
        .toUpperCase()
        .includes(this.state.filterCharacters.toUpperCase());
    });
    this.setState({
      listFilter: filterPerson,
    });
  }
  renderCharacterDetail = (props) => {
    const foundId = parseInt(props.match.params.id);
    const foundCharacter = this.state.characters.find((character) => {
      return character.id === foundId;
    });
    return <CharacterDetail foundCharacter={foundCharacter} />;
  };
  render() {
    return (
      <>
        <Header></Header>
        <main className="container">
          <Switch>
            <Route exact path="/">
              <Filters
                handleFilter={this.handleFilter}
                filterCharacters={this.state.filterCharacters}
              ></Filters>
              <CharacterList characters={this.state.listFilter}></CharacterList>
            </Route>
            <Route
              path="/character/:id"
              render={this.renderCharacterDetail}
            ></Route>
          </Switch>
        </main>
      </>
    );
  }
}

export default App;
