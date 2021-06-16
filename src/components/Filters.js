import React from "react";
import FilterName from "./FilterName";
import FilterStatus from "./FilterStatus";

const handleFormSubmit = (ev) => {
  ev.preventDefault();
};
const Filters = (props) => {
  return (
    <form action="" className="filterCharacter" onSubmit={handleFormSubmit}>
      <FilterName
        statusFilter={props.statusFilter}
        handleFilter={props.handleFilter}
        filterCharacters={props.filterCharacters}
      ></FilterName>
      <FilterStatus statusFilter={props.statusFilter}></FilterStatus>
    </form>
  );
};

export default Filters;
