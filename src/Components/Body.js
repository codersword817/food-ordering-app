import React, { useState } from "react";
import ItemContainer from "./ItemContainer";
import "./Body.css";
import { SWIGGY_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

function Body() {
  const [curr_data, setData] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const onlineStatus = useOnlineStatus();
  const fetchData = async () => {
    const data = await fetch(SWIGGY_API_URL);
    const json_data = await data.json();
    const dt =
      json_data?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setData(dt);
    setFilteredData(dt);
  };

  useState(() => {
    fetchData();

    // console.log(filteredData);
  }, []);

  const searchHandler = (e) => {
    setSearchData(e.target.value.toLowerCase());
    // console.log(searchData);
  };

  const searchButtonHandler = () => {
    setData(curr_data);
    setFilteredData(
      curr_data.filter((ele) =>
        ele.info?.name?.toLowerCase().includes(searchData)
      )
    );
    // console.log(filteredData);
  };

  if (!onlineStatus) {
    return (
      <>
        <h1>U are in Offline kindly check your Internet Connection </h1>
      </>
    );
  }
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
            <NavLink key={e.info.id} to={"/restaurants/" + e.info.id}>
              <ItemContainer resData={e.info}></ItemContainer>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
}

export default Body;
