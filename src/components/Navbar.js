import "./Navbar.css";
import { NavLink } from "react-router-dom";
import 'react-dropdown/style.css';
import Dropdown from "./Dropdown";

const  Navbar = () => {
  return (
    <nav className="navbar-container">
        <strong>Create a card</strong>
        <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        <Dropdown />
      </NavLink>
       
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
