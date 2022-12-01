import React from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.png";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Mahsa's Movie App</div>
      </Link>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
}

export default Header;
