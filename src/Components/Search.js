import React from "react";
import "./Search.css";
function Search() {
  return (
    <div className="searchContainer">
      <input type="text" name="search" id="search-text" />
      <button id="search-button">Search</button>
    </div>
  );
}

export default Search;
