import React, { useState, useEffect } from "react";
import "./App.scss";
import getApi from "../services/api";
import CharacterList from "./CharacterList";
import Header from "./Header";
import Filters from "./Filters";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filterCharacters, setFilterCharacters] = useState("");

  useEffect(() => {
    getApi().then((data) => {
      setCharacters(data);
    });
  }, []);

  const handleFilter = (inputValue) => {
    setFilterCharacters(inputValue);
  };

  const filterPerson = characters.filter((character) => {
    return character.name
      .toUpperCase()
      .includes(filterCharacters.toUpperCase());
  });

  return (
    <>
      <Header></Header>
      <main className="container">
        <Filters handleFilter={handleFilter}></Filters>
        <CharacterList characters={filterPerson}></CharacterList>
      </main>
    </>
  );
};

export default App;
