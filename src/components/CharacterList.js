import React from "react";
import CharacterCard from "./CharacterCard";
import CharacterListError from "./CharacterListError";
import "./characterList.scss";

const CharacterList = (props) => {
  const newCharacter = props.characters.map((character) => {
    return (
      <li key={character.id} id={character.id}>
        <CharacterCard
          name={character.name}
          img={character.image}
          species={character.species}
          id={character.id}
        />
      </li>
    );
  });
  return (
    <>
      {newCharacter.length === 0 ? (
        <CharacterListError></CharacterListError>
      ) : (
        <ul className="characterList">{newCharacter}</ul>
      )}
    </>
  );
};

export default CharacterList;
