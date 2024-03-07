import React from "react";
import "./Search.css";

function Search(props) {
  return (
    <div className="searchContainer">
      <input
        type="text"
        name="search"
        id="search-text"
        placeholder="Order ypur Fav Food at ur Nearby Stores"
      />
      <button id="search-button" className="btn">
        Search
      </button>
      <button
        id="filter"
        className="btn"
        onClick={() => {
          const data = props.data.filter((res) => res.info.avgRating > 4.3);
          props.setData(data);
        }}
      >
        top-rated places
      </button>
    </div>
  );
}

export default Search;
