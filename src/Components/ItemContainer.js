import React from "react";
import { CDN_URL } from "../utils/constants";

function ItemContainer(props) {
  const { resData } = props;
  // const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
  //   resData?.info;
  const url = CDN_URL;
  return (
    <div>
      <div className="container h-[23rem] w-[16rem] flex flex-col m-4 p-4 border-2 border-solid shadow-md bg-blue-50 hover:bg-blue-300 ">
        <img
          className="food-item h-3/5 rounded-sm"
          src={url + resData.cloudinaryImageId}
          alt="food-item-img"
        />
        <div className=" font-bold ">{resData.name}</div>
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
