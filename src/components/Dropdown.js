
import { useState } from "react";
import "./Dropdown.css";

const options = ["Birthday Card", "Wedding Card", "Get Well Soon"];

const Dropdown = () => {
  const [open, setOpen] = useState(true);

  return (
    <nav className="dropdown-menu">
      <button
        onClick={() => setOpen(!open)}
        //hidden={!open}
        className="menu-button"
      >
        Category
      </button>

      <ul hidden={open} onClick={() => setOpen(!open)} className="menu-list">
        <button
          onClick={() => setOpen(open)}
          hidden={open}
          className="menu-cross-button"
        ></button>

        {options.map((option) => (
          <li className="menu-item" key={option}>{option}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Dropdown;
