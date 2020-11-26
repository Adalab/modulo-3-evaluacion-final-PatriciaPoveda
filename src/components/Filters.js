import React from "react";
import FilterName from "./FilterName";

const handleFormSubmit = (ev) => {
  ev.preventDefault();
};
const Filters = (props) => {
  const handleClick = (ev) => {
    const newValue = ev.target.value;
    props.statusFilter(newValue);
  };
  return (
    <form action="" className="filterCharacter" onSubmit={handleFormSubmit}>
      <FilterName
        handleFilter={props.handleFilter}
        filterCharacters={props.filterCharacters}
      ></FilterName>
      <label htmlFor="size">Status</label>
      <select id="size" name="size" onChange={handleClick}>
        <option value="Alive">vivo</option>
        <option value="Dead">muerto</option>
        <option value="unknown">desconocido</option>
      </select>
    </form>
  );
};

export default Filters;
