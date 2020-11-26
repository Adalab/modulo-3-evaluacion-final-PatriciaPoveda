import React, { useState, useEffect } from "react";
import "./App.scss";
import getApi from "../services/api";
import CharacterList from "./CharacterList";
import Header from "./Header";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import { Route, Switch } from "react-router-dom";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [select, setSelect] = useState("Alive");
  const [filterCharacters, setFilterCharacters] = useState("");

  useEffect(() => {
    getApi().then((data) => {
      setCharacters(data);
    });
  }, []);

  const handleFilter = (inputValue) => {
    setFilterCharacters(inputValue);
  };
  const statusFilter = (newValue) => {
    setSelect(newValue);
  };

  const filterPerson = characters
    .filter((character) => {
      return character.name
        .toUpperCase()
        .includes(filterCharacters.toUpperCase());
    })
    .filter((character) => {
      return character.status === select;
    });

  const renderCharacterDetail = (props) => {
    const foundId = parseInt(props.match.params.id);
    const foundCharacter = characters.find((character) => {
      return character.id === foundId;
    });
    return <CharacterDetail foundCharacter={foundCharacter} />;
  };
  return (
    <>
      <Header></Header>
      <main className="container">
        <Switch>
          <Route exact path="/">
            <Filters
              statusFilter={statusFilter}
              handleFilter={handleFilter}
              filterCharacters={filterCharacters}
            ></Filters>
            <CharacterList characters={filterPerson}></CharacterList>
          </Route>
          <Route path="/character/:id" render={renderCharacterDetail}></Route>
        </Switch>
      </main>
    </>
  );
};

export default App;
