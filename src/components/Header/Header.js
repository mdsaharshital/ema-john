import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav className="header">
        <img src={logo} alt="" />
        <div className="menu">
          <Link to="/shop">Shop</Link>
          <Link to="/order">Order</Link>
          <Link to="/inventory">Inventory</Link>
          <Link to="/about">About</Link>
          <Link to="/login">Log in</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;