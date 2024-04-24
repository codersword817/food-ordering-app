import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";
import MenuItems from "./MenuItems";
import { useState } from "react";
const Menu = () => {
  // const [menuData, setMenuData] = useState(null);
  const [showIndex, setShowIndex] = useState(null);
  const { id } = useParams();

  const data = useResMenu(id);
  return data === null ? (
    <Shimmer />
  ) : (
    <>
      <div className="menu">
        {data.map((e, idx) => {
          return (
            <MenuItems
              key={e?.card?.card?.title}
              data={e}
              showItems={idx === showIndex ? true : false}
              setShowIndex={() => setShowIndex(idx)}
            />
          );
        })}
      </div>
    </>
  );
};

export default Menu;
