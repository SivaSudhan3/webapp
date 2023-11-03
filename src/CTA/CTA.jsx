import React from "react";
import "./CTA.scss";
import Google from "../assets/images/Google-Play.png";
import App from "../assets/images/App-Store.png";
import Phone from "../assets/images/Iphone.png";

const CTA = () => {
  return (
    <div className="cta">
      <div className="left">
        <img src={Phone} alt="phoneImg" />
      </div>
      <div className="right">
        <h1>Get the Food app</h1>
        <p>
          We will send you a link, open it on your phone to download the app
        </p>
        
        <div className="radio">
          <div className="radioBtn">
           
            <label htmlFor="email">Email</label>
            <input type="radio" name="radio"/>
          </div>
          <div className="radioBtn">
            <input type="radio" name="radio"/>
            <label htmlFor="phone">Phone</label>
          </div>
        </div>
        <form className="input">
        <input
              type="email"
              name="email"
            />
         <input
              type="phone"
              name="phone"
            />    
          <button type="submit">Share App Link</button>
        </form>
        <span>Download app from</span>
        <div className="img">
          <img src={Google} alt="google" />
          <img src={App} alt="google" />
        </div>
      </div>
    </div>
  );
};

export default CTA;