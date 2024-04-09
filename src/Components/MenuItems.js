import CategoryList from "./CategoryList";

const MenuItems = ({ data }) => {
  console.log(data);
  let num = 0;
  return (
    <div className="w-1/2 bg-blue-50 m-auto">
      <ul className=" text-center ">
        {data.map((e) => (
          <div key={num++}>
            {/* Accordion Head   */}
            <li className="  bg-gray-100 p-4 font-bold flex justify-between text-md shadow-md">
              <span>
                {e?.card?.card?.title} ({e?.card?.card?.title?.length})
              </span>
              <span>{"🔽"}</span>
            </li>
            {/*  Accordion Body  */}
            <div>{<CategoryList data={e?.card?.card?.itemCards} />}</div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default MenuItems;
