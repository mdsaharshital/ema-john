import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  const handlLogOut = () => {
    signOut(auth);
  };
  return (
    <header>
      <nav className="header">
        <img src={logo} alt="" />
        <div className="menu">
          <Link to="/shop">Shop</Link>
          <Link to="/order">Order</Link>
          <Link to="/inventory">Inventory</Link>
          <Link to="/about">About</Link>
          {user ? (
            <button onClick={handlLogOut}>Log Out</button>
          ) : (
            <Link to="/login">Log in</Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
