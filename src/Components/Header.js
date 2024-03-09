import React from "react";
import "./Header.css";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

function Header() {
  const [btnValue, setBtnValue] = useState("Login");
  const btnHandler = () => {
    btnValue === "Login" ? setBtnValue("Logout") : setBtnValue("Login");
  };
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Food App Logo Img" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login" onClick={btnHandler}>
            {btnValue}
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Header;
