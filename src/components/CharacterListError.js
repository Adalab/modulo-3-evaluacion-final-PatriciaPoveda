import React from "react";
import "./characterList.scss";
import logo from "../images/homero-simpson-400x360.jpg";

const CharacterList = () => {
  return (
    <article className="filterError">
      <img src={logo} alt="" className="filterError__img" />
      <h3 className="filterError__text">Te has equivocado de personaje</h3>
    </article>
  );
};

export default CharacterList;
