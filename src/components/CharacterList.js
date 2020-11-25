import React from "react";
import CharacterCard from "./CharacterCard";
import "./characterList.scss";
import logo from "../images/homero-simpson-400x360.jpg";

class CharacterList extends React.Component {
  render() {
    const newCharacter = this.props.characters.map((character) => {
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
        {this.props.characters.length === 0 ? (
          <article className="filterError">
            <img src={logo} alt="" className="filterError__img" />
            <h3 className="filterError__text">
              Te has equivocado de personaje
            </h3>
          </article>
        ) : (
          <ul className="characterList">{newCharacter}</ul>
        )}
      </>
    );
  }
}

export default CharacterList;
