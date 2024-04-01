// import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
// import { MENU_API_URL } from "../utils/constants";
import useResMenu from "../utils/useResMenu";
// import { NavLink } from "react-router-dom";
const Menu = () => {
  // const [menuData, setMenuData] = useState(null);
  const { id } = useParams();

  const data = useResMenu(id);
  // setMenuData(data);

  return data === null ? (
    <Shimmer />
  ) : (
    <>
      <div className="menu">
        <h1>The Menu Card </h1>
        <ul>
          {data.map((data) => (
            <li key={data?.card?.info?.id}>
              <p>
                {data?.card?.info?.name} -{" "}
                {data?.card?.info?.defaultPrice / 100 ||
                  data?.card?.info?.price / 100}{" "}
                Rs
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Menu;
