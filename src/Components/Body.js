import React, { useState } from "react";
import ItemContainer from "./ItemContainer";
import "./Body.css";
import { SWIGGY_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

function Body() {
  const [curr_data, setData] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  // console.log("Entered");
  const fetchData = async () => {
    const data = await fetch(SWIGGY_API_URL);
    const json_data = await data.json();
    const dt =
      json_data?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    // Optional Chaining ?.  => To prevent from getting nulls in bw them
    // console.log(dt);
    setData(dt);
    setFilteredData(dt);
  };

  useState(() => {
    fetchData();

    // console.log(filteredData);
  }, []);

  const searchHandler = (e) => {
    setSearchData(e.target.value);
    // console.log(searchData);
  };

  const searchButtonHandler = () => {
    setData(curr_data);
    setFilteredData(
      curr_data.filter((ele) =>
        ele.info?.name?.toLowerCase().includes(searchData)
      )
    );
    console.log(filteredData);
  };

  // // Conditional Rendering
  // if (curr_data.length === 0) {
  //   return <Shimmer></Shimmer>;
  // }
  return curr_data.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="searchContainer">
        <input
          type="text"
          name="search"
          id="search-text"
          placeholder="Order your Fav Food at ur Nearby Stores"
          value={searchData}
          onChange={searchHandler}
        />
        <button
          id="search-button"
          className="btn"
          onClick={searchButtonHandler}
        >
          Search
        </button>
        <button
          id="filter"
          className="btn"
          onClick={() => {
            const data = filteredData.filter((res) => res.info.avgRating > 4.3);
            setFilteredData(data);
          }}
        >
          top-rated places
        </button>
      </div>
      <div>
        <div className="outerContainer">
          {filteredData.map((e) => (
            <ItemContainer key={e.id} resData={e.info}></ItemContainer>
          ))}
        </div>
      </div>
    </>
  );
}

export default Body;
