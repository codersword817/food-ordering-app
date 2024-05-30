import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { clearCart } from "../utils/cartDataStore";

const Cart = (props) => {
  const { items } = props;
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <div className=" flex flex-row-reverse">
        <button
          className="my-2 p-2 bg-red-500 text-white text-end mx-6"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
      {items.map((e) => (
        <div
          className=" bg-gray-50 flex justify-center  w-2/4 m-auto"
          key={e?.id}
        >
          <div className=" text-sm p-2 m-2 w-8/12  ">
            <div className=" font-medium ">{e?.name}</div>
            <div className=" font-semibold ">
              {e?.price / 100 || e?.defaultPrice / 100} ₹
            </div>
            <div className=" font-thin">{e?.description}</div>
          </div>
          <div className="w-4/12 ">
            <img
              className=" rounded-md   p-6  "
              src={CDN_URL + e?.imageId}
              alt="Food Item img"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Cart;
