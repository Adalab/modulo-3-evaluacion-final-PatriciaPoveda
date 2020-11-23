import React, { useState, useEffect } from "react";
import "./App.scss";
import getApi from "../services/api";
import CharacterList from "./CharacterList";
import Header from "./Header";
const App = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    getApi().then((data) => {
      setCharacters(data);
    });
  }, []);
  return (
    <>
      <Header></Header>
      <main className="container">
        <CharacterList characters={characters}></CharacterList>
      </main>
    </>
  );
};

export default App;
