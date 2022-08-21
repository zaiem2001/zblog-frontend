import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Z</span>
        <span className="headerTitleLg">BLOG</span>
      </div>

      <div className="headerImgBox">
        <img className="headerImg" src="/assets/car.jpg" alt="" />
      </div>
    </div>
  );
};

export default Header;
