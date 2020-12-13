import React from "react";

const Searchbar = ({ query, handleChange }) => {
  return (
    <div>
      <input
        value={query}
        type="search"
        placeholder="search"
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </div>
  );
};

export default Searchbar;
