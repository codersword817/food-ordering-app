// import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
// import { MENU_API_URL } from "../utils/constants";
import useResMenu from "../utils/useResMenu";
// import { NavLink } from "react-router-dom";
import MenuItems from "./MenuItems";
const Menu = () => {
  // const [menuData, setMenuData] = useState(null);
  const { id } = useParams();

  const data = useResMenu(id);
  return data === null ? (
    <Shimmer />
  ) : (
    <>
      <div className="menu">
        {data.map((e) => {
          return <MenuItems key={e?.card?.card?.title} data={e} />;
        })}
      </div>
    </>
  );
};

export default Menu;
