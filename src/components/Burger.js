import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faBars,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./Burger.css";
import { Link } from "react-router-dom";

const options = ["Birthday Card", "Wedding Card", "Get Well Soon"];
const Burger = () => {
  const [open, setOpen] = useState(true);

  return (
    <nav className="burger-menu">
      <button
        onClick={() => setOpen(!open)}
        hidden={!open}
        className="menu-button"
      >
        <FontAwesomeIcon icon={faBars} size={"2x"} />
      </button>

      <ul hidden={open} onClick={() => setOpen(!open)} className="menu-list">
        <button
          onClick={() => setOpen(open)}
          hidden={open}
          className="menu-cross-button"
        >
          <FontAwesomeIcon icon={faXmark} size={"2x"} />
        </button>

        <li className="menu-item">
          <div className="subnav">
            <button className="subnavbtn">
              Category 
            </button>
            <div className="subnav-content">
                {options.map(option => (
                <a href="/" className="card-type" key={option}>
                  {option}
                </a>
              ))}
            </div>
          </div>
        </li>

        <li className="menu-item">
          <Link to={`/about`} className="menu-link">
            About
          </Link>
        </li>

        <li className="menu-item">
          <Link to={`/contact`} className="menu-link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Burger;
