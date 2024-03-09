import React from "react";
import "./Header.css";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Body from "./Body";
import Error from "./Error";
import Contact from "./Contact";
import About from "./About";
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
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
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </>
  );
}

export default Header;
