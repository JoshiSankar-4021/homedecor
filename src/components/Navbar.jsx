import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">Home Decor</div>
      <nav>
        <NavLink to="/" className="nav-link" end>Home</NavLink>
        <NavLink to="/products" className="nav-link">Products</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavLink to="/gallery" className="nav-link">Store Gallery</NavLink>
        <NavLink to="/contact" className="nav-link">Contact</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
