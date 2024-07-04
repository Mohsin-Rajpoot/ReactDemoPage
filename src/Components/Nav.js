import React from "react";
import "./NavStyles.css";
import logo from "../Assets/image1.svg";

function Nav() {
  return (
    <div className="nav">
      <div className="image">
        <img src={logo} />
      </div>

      <div className="links">
        <button className="btn1">Watch News</button>
        <button className="btn1">Watch News</button>
      </div>
    </div>
  );
}

export default Nav;
