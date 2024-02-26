import React from "react";
import "./ItemContainer.css";
import { CDN_URL } from "../utils/constants";

function ItemContainer(props) {
  const { resData } = props;
  // const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
  //   resData?.info;
  const url = CDN_URL;
  return (
    <div>
      <div className="container">
        <img
          className="food-item"
          src={url + resData.cloudinaryImageId}
          alt="food-item-img"
        />
        <div>{resData.name}</div>
        <div className="content">{resData.cuisines.join(", ")}</div>
        <div className="rating">
          {resData.avgRating} rating,
          {resData.sla.deliveryTime} minutes
        </div>
        <h4>{resData.costForTwo}</h4>
      </div>
    </div>
  );
}

export default ItemContainer;
