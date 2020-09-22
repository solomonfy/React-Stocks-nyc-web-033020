import React from "react";

const SearchBar = (props) => {
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          name="kosher"
          type="radio"
          value="Alphabetically asc"
          checked={null}
          onChange={(e) => props.sortStocks(e.target.value)}
        />
        Alphabetically (A-Z)
      </label>
      <label>
        <input
          name="kosher"
          type="radio"
          value="Alphabetically desc"
          checked={null}
          onChange={(e) => props.sortStocks(e.target.value)}
        />
        Alphabetically (Z-A)
      </label>
      <label>
        <input
          name="kosher"
          type="radio"
          value="Price"
          checked={null}
          onChange={(e) => props.sortStocks(e.target.value)}
        />
        Price
      </label>
      <br />

      <label onChange={(e) => props.filterStock(e.target.value)}>
        <strong>Filter:</strong>
        <select onChange={null}>
          <option disabled selected value="select filter">
            Select filter
          </option>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
};

export default SearchBar;
