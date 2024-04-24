import { useState } from "react";
import CategoryList from "./CategoryList";

const MenuItems = ({ data }) => {
  const [showItems, setShowItems] = useState(false);
  const clickHandler = () => {
    setShowItems(!showItems);
  };
  let num = 0;
  return (
    <div className="w-1/2 bg-blue-50 m-auto">
      <div key={num++}>
        {/* Accordion Head   */}
        <div>
          <li
            onClick={clickHandler}
            className="  bg-gray-100 p-4 font-bold flex justify-between text-md my-1 shadow-md cursor-pointer"
          >
            <span>
              {data?.card?.card?.title} ({data?.card?.card?.title?.length})
            </span>
            <span>{"🔽"}</span>
          </li>
        </div>
        {/*  Accordion Body  */}
        {showItems && <CategoryList data={data?.card?.card?.itemCards} />}
      </div>
    </div>
  );
};

export default MenuItems;