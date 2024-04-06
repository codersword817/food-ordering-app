import React, { lazy, Suspense } from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Body from "./Body";
import Error from "./Error";
import Contact from "./Contact";
// import About from "./About";
import Menu from "./Menu";
import useOnlineStatus from "../utils/useOnlineStatus";
function Header() {
  const [btnValue, setBtnValue] = useState("Login");
  const btnHandler = () => {
    btnValue === "Login" ? setBtnValue("Logout") : setBtnValue("Login");
  };
  const onlineStatus = useOnlineStatus();
  const About = lazy(() => import("./About"));
  return (
    <>
      <div className="header flex justify-between bg-blue-200 shadow-md ">
        <div className="logo-container w-24 space-x-4 mix-blend-multiply">
          <img className="logo" src={LOGO_URL} alt="Food App Logo Img" />
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
              <NavLink to="/cart">Cart</NavLink>
            </li>
            <button className="login mx-4" onClick={btnHandler}>
              {btnValue}
            </button>
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
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/restaurants/:id" element={<Menu />}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </>
  );
}

export default Header;
