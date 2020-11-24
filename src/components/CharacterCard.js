import React from "react";
import "./characterCard.scss";

const CharacterCard = (props) => {
  return (
    <article className="characterCard">
      <img
        className="characterCard__img"
        src={props.img}
        alt={`Character: ${props.name}`}
      />
      <div className="characterCard__info">
        <h2 className="characterCard__info--name">{props.name}</h2>
        <p className="characterCard__info--type">{props.species}</p>
      </div>
    </article>
  );
};

export default CharacterCard;
