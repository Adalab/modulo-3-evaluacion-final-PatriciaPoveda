import React, { useState, useEffect } from "react";
import getApi from "../services/api";
import CharacterList from "./CharacterList";
import Header from "./Header";
import Filters from "./Filters";
import Landing from "./Landing";
import CharacterDetail from "./CharacterDetail";
import { Route, Switch } from "react-router-dom";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filterCharacters, setFilterCharacters] = useState("");
  const [select, setSelect] = useState("Selecciona");

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
      if (character.status === select) {
        return true;
      } else if (select === "Selecciona") {
        return characters;
      }
    });
  const renderCharacterDetail = (props) => {
    const foundId = parseInt(props.match.params.id);
    const foundCharacter = characters.find((character) => {
      return character.id === foundId;
    });
    return (
      <>
        <Header></Header>
        <CharacterDetail foundCharacter={foundCharacter}></CharacterDetail>
      </>
    );
  };

  return (
    <>
      <main className="container">
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Landing></Landing>
          </Route>
          <Route path="/characters" component={(Filters, CharacterList)}>
            <Header></Header>
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
