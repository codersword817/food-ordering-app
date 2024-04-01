import React from "react";
import "./Header.css";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Body from "./Body";
import Error from "./Error";
import Contact from "./Contact";
import About from "./About";
import Menu from "./Menu";
function Header() {
  const [btnValue, setBtnValue] = useState("Login");
  const btnHandler = () => {
    btnValue === "Login" ? setBtnValue("Logout") : setBtnValue("Login");
  };
  return (
    <>
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} alt="Food App Logo Img" />
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
            <li>
              <NavLink to="/cart">Cart</NavLink>
            </li>
            <button className="login" onClick={btnHandler}>
              {btnValue}
            </button>
          </ul>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Body />}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/restaurants/:id" element={<Menu />}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </>
  );
}

export default Header;
