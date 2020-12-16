import React from "react";
import "./Searchbar.css";

const Searchbar = ({ query, handleInputChange }) => {
  return (
    <div className="input-group mb-4 ">
      <input
        type="search"
        placeholder="What are you searching for?"
        aria-describedby="button-addon5"
        className="form-control"
        value={query}
        onChange={handleInputChange}
      />
      <div className="input-group-append">
        <button id="button-addon5" type="submit" className="btn search-button">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
