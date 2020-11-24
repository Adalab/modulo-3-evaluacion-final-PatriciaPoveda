import React from "react";
import CharacterCard from "./CharacterCard";
import "./characterList.scss";

const CharacterList = (props) => {
  const newCharacter = props.characters.map((character) => {
    return (
      <li key={character.id}>
        <CharacterCard
          name={character.name}
          img={character.image}
          species={character.species}
        />
      </li>
    );
  });
  return (
    <>
      <ul className="characterList">{newCharacter}</ul>
    </>
  );
};

export default CharacterList;
