import React from "react";
import "./ItemContainer.css";

function ItemContainer(props) {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    resData?.info;
  const url =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  return (
    <div>
      <div className="container">
        <img
          className="food-item"
          src={url + cloudinaryImageId}
          alt="food-item-img"
        />
        <div>{name}</div>
        <div className="content">{cuisines.join(", ")}</div>
        <div className="rating">
          {avgRating} rating,
          {sla.deliveryTime} minutes
        </div>
        <h4>{costForTwo}</h4>
      </div>
    </div>
  );
}

export default ItemContainer;
