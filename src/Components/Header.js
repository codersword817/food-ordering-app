import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.pngfind.com/pngs/m/5-59796_food-delivery-delivery-food-icon-png-transparent-png.png"
          alt="Food App Logo Img"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
