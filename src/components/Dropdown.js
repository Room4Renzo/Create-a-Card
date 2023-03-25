import { useState } from "react";
import "./Dropdown.css";

import BirthdayCardTemplate from "../assets/images/Templates/birthday-template1.jpeg";
import WeddingCardTemplate from "../assets/images/Templates/wedding-template1.jpeg";
import GetWellSoonCardTemplate from "../assets/images/Templates/get-well-soon-template1.jpeg";

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
	const [clickedCardCategory, setClickedCardCategory] = useState(false);

	const setTemplate = (name) => {
		console.log(name.category);
		console.log(name.template);
		setCardTemplate(name.template);
		setClickedCardCategory(true);
	};

	return (
		<div>
			<div className="dropdown-menu">
				<button
					onClick={() => setOpen(!open)}
					className="menu-button"
				>
					Category
				</button>


        <ul hidden={open} onClick={() => setOpen(!open)} className="menu-list">
          {options.map((option) => (
            <li
              className="menu-item"
              key={option.category}
              onClick={() => setTemplate(option)}
            >
              {option.category}
            </li>
          ))}
        </ul>
        {clickedCardCategory ? <CardTemplate image={cardTemplate} className="rectangle"/> : <div></div> }
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
