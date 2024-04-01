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
    setResInfo(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards ||
        json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
          ?.card?.categories[0]?.itemCards
    );
  };
  return resInfo;
};

export default useResMenu;
