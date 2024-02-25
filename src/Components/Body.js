import React from "react";
import Search from "./Search";
import ItemContainer from "./ItemContainer";
import "./Body.css";
import data from "./../utils/mockData";

function Body() {
  return (
    <div>
      <Search></Search>
      <div className="outerContainer">
        {data.map((e) => {
          return <ItemContainer key={e.info.id} resData={e}></ItemContainer>;
        })}
      </div>
    </div>
  );
}

export default Body;
