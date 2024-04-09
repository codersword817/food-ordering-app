import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";
const useResMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData(resId);
  }, []);
  const fetchData = async (resId) => {
    const data = await fetch(MENU_API_URL + resId);
    const json = await data.json();
    const categoryData =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    // console.log(categoryData);

    setResInfo(
      categoryData.filter(
        (e) =>
          e.card?.["card"]?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
    );
  };
  return resInfo;
};

export default useResMenu;
