import { useState } from "react";
import "./Dropdown.css";

import BirthdayCardTemplate from "../assets/images/templates/birthday-template1.jpeg";
import WeddingCardTemplate from "../assets/images/templates/wedding-template1.jpeg";
import GetWellSoonCardTemplate from "../assets/images/templates/get-well-soon-template1.jpeg";

import CardTemplate from "./CardTemplate";

const options = [
  {
    category: "Birthday Card",
    template: BirthdayCardTemplate,
  },
  {
    category: "Wedding Card",
    template: WeddingCardTemplate,
  },
  {
    category: "Get Well Soon",
    template: GetWellSoonCardTemplate,
  },
];

const Dropdown = () => {
  const [open, setOpen] = useState(true);
  const [cardTemplate, setCardTemplate] = useState(options[0].template);
  const [clickedCardCategory, setClickedCardCategory] = useState(true);

  const setTemplate = (name) => {
    console.log(name.category);
    console.log(name.template);
    setClickedCardCategory(!clickedCardCategory);
    setCardTemplate(name.template);
  };

  return (
    <div>
      <div className="dropdown-menu">
        <button onClick={() => setOpen(!open)} className="menu-button">
          Category
        </button>

        <ul hidden={open} onClick={() => setOpen(!open)} className="menu-list">
          <button
            onClick={() => setOpen(open)}
            hidden={open}
            className="menu-cross-button"
          ></button>

          {options.map((option) => (
            <li
              className="menu-item"
              key={option.category}
              onClick={() => setTemplate(option)}
            >
              {option.category}
              {clickedCardCategory ? <CardTemplate image={cardTemplate} /> : <CardTemplate image={BirthdayCardTemplate} />}
            </li>
          ))}
        </ul>
        <CardTemplate image={BirthdayCardTemplate} />
      </div>
    </div>
  );
};

export default Dropdown;

{
  /* <div className="appear">
{clickedCardCategory ? <CardTemplate image={cardTemplate} /> : <CardTemplate image={"../assets/images/templates/birthday-template2.jpeg"} />}
{/* <CardTemplate image={"../assets/images/templates/birthday-template1.jpeg"} /> */
}
//</div> */}
