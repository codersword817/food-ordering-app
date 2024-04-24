import { CDN_URL } from "../utils/constants";

const CategoryList = ({ data }) => {
  return (
    <>
      {data.map((e) => (
        <div
          className=" bg-gray-50 flex justify-around"
          key={e?.card?.info?.id}
        >
          <div className=" text-sm p-2 m-2 w-8/12  ">
            <div className=" font-medium ">{e?.card?.info?.name}</div>
            <div className=" font-semibold ">
              {e?.card?.info?.price / 100 || e?.card?.info?.defaultPrice / 100}{" "}
              ₹
            </div>
            <div className=" font-thin">{e?.card?.info?.description}</div>
          </div>
          <div className="w-4/12 ">
            <img
              className=" rounded-md   p-6  "
              src={CDN_URL + e?.card?.info?.imageId}
              alt="Food Item img"
            />
            <button className=" bg-green-100 p-2 ">ADD + </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default CategoryList;
