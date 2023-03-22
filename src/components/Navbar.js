import "./Navbar.css";
import { NavLink } from "react-router-dom";
import 'react-dropdown/style.css';
import { useState } from 'react';
import Dropdown from "./Dropdown";

const  Navbar = () => {
    const options = [
        'Birthday Card', 'Wedding Card', 'Get Well Soon'
      ];
      
  return (
    <nav className="navbar-container">
        <strong>Create a card</strong>
        <Dropdown />
        <NavLink
        to="/about"
        end
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Contact
      </NavLink>
    </nav>
  );
}

export default Navbar;
