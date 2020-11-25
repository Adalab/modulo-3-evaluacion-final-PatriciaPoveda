import React from "react";
import FilterName from "./FilterName";

const handleFormSubmit = (ev) => {
  ev.preventDefault();
};
const Filters = (props) => {
  return (
    <form action="" className="filterCharacter" onSubmit={handleFormSubmit}>
      <FilterName
        handleFilter={props.handleFilter}
        filterCharacters={props.filterCharacters}
      ></FilterName>
    </form>
  );
};

export default Filters;
