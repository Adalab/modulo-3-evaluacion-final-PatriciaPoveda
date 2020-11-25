import React from "react";
import "./filterName.scss";

const FiltersName = (props) => {
  const handleChange = (ev) => {
    const inputValue = ev.target.value;
    props.handleFilter(inputValue);
  };
  return (
    <>
      <label htmlFor="nameCharacter"></label>
      <input
        type="text"
        id="nameCharacter"
        className="filterCharacter__input"
        placeholder="Ej: Morty"
        onChange={handleChange}
        value={props.filterCharacters}
      />
    </>
  );
};

export default FiltersName;
