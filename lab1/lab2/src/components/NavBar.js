// src/components/NavBar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" exact="true" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/merch" className="nav-link">
        Merch
      </NavLink>
      <NavLink to="/media" className="nav-link">
        Media
      </NavLink>
      <NavLink to="/contact" className="nav-link">
        Contact
      </NavLink>
    </nav>
  );
};

export default NavBar;
