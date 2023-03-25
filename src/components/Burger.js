import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./Burger.css";
import { Link } from "react-router-dom";
import CardTemplate from "./CardTemplate";
import BirthdayCardTemplate from "../assets/images/Templates/birthday-template1.jpeg";
import WeddingCardTemplate from "../assets/images/Templates/wedding-template1.jpeg";
import GetWellSoonCardTemplate from "../assets/images/Templates/get-well-soon-template1.jpeg";

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
const Burger = () => {
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
			<nav className="burger-menu">
				<button
					onClick={() => setOpen(!open)}
					hidden={!open}
					className="menu-button"
				>
					<FontAwesomeIcon
						icon={faBars}
						size={"2x"}
					/>
				</button>

				<ul
					hidden={open}
					onClick={() => setOpen(!open)}
					className="menu-list"
				>
					<button
						onClick={() => setOpen(open)}
						hidden={open}
						className="menu-cross-button"
					>
						<FontAwesomeIcon
							icon={faXmark}
							size={"2x"}
						/>
					</button>

					<li className="menu-item">
						<div className="subnav">
							<button className="subnavbtn">Category</button>
							<div className="subnav-content">
								{options.map((option) => (
									<li
										className="burger-menu-item"
										key={option.category}
										onClick={() => setTemplate(option)}
									>
										{option.category}
									</li>
								))}
							</div>
						</div>
					</li>

					<li className="menu-item">
						<Link
							to={`/about`}
							className="menu-link"
						>
							About
						</Link>
					</li>

					<li className="menu-item">
						<Link
							to={`/contact`}
							className="menu-link"
						>
							Contact
						</Link>
					</li>
				</ul>
			</nav>
			{clickedCardCategory ? (
				<CardTemplate
					image={cardTemplate}
					className="rectangle"
				/>
			) : (
				<CardTemplate
					image={BirthdayCardTemplate}
					className="rectangle"
				/>
			)}
		</div>
	);
};

export default Burger;
