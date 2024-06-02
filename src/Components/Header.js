import React, { lazy, Suspense, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Body from "./Body";
import Error from "./Error";
import Contact from "./Contact";
import Cart from "./Cart";
import Menu from "./Menu";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
function Header() {
  const { name } = useContext(UserContext);
  const [btnValue, setBtnValue] = useState("Login");
  const btnHandler = () => {
    btnValue === "Login" ? setBtnValue("Logout") : setBtnValue("Login");
  };
  // subscribing the  store using a selector
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  const onlineStatus = useOnlineStatus();
  const About = lazy(() => import("./About"));
  return (
    <>
      <div className="header flex justify-between bg-blue-200 shadow-md h-24 ">
        <div className="  mix-blend-multiply flex items-center ">
          <img className="logo h-20" src={LOGO_URL} alt="Food App Logo Img" />
          <h1 className=" font-bold font-serif text-xl mx-8 text-cyan-700 ">
            Foodie Express.com
          </h1>
        </div>
        <div className="nav-items flex items-center justify-center">
          <ul className="flex p-4 space-x-4">
            <li className="mx-4">
              Online Status : {onlineStatus ? "✅" : "❌"}
            </li>
            <li className="mx-4">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="mx-4">
              <NavLink to="/about">About Us</NavLink>
            </li>{" "}
            <li className="mx-4">
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
            <li className="mx-4">
              <NavLink to="/cart" className=" font-bold ">
                Cart - {cartItems.length}{" "}
              </NavLink>
            </li>
            <button className="login mx-4" onClick={btnHandler}>
              {btnValue}
            </button>
            <button className="login mx-4 font-bold">{name}</button>
          </ul>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Body />}></Route>
        <Route
          path="/about"
          element={
            <Suspense fallback={<>Lazy Loading......</>}>
              <About />
            </Suspense>
          }
        ></Route>
        <Route path="/cart" element={<Cart items={cartItems} />}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/restaurants/:id" element={<Menu />}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </>
  );
}

export default Header;
