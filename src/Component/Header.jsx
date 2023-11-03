import React from "react";
import "./Header.scss";
import Logo from "../assets/images/Zomato-Logo.png";
const Header = () => {
    return (
      <div className="header">
        <nav>
          <span>App</span>
          <div className="right">
            <span></span>
            <span>Add restaurant</span>
            <span>Log in</span>
            <span>Sign up</span>
          </div>
        </nav>
        <div className="headerContent">
        <img src={Logo} alt="logo" />
        <h3>Discover the best food & drinks in India</h3>
        <div className="input">
          <select name="" id="">
            <option value="Chennai">Chennai</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Kolkata">Kolkata</option>
          </select>
          |
          <input
            type="text"
            placeholder="Search for restaurant"
          /></div>
          </div>
      </div>
    );
};

export default Header;