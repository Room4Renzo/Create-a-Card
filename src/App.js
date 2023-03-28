import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import "./App.css";
import Carousel from "./components/CarouselTest";
import TextInput from "./components/TextInput";
import Header from "./components/Header";
import CardTemplate from "./components/CardTemplate";
import ResizeImage from "./components/ResizeImage";
import DownloadButton from "./components/DownloadButton";
import BirthdayCardTemplate from "./assets/images/Templates/birthday-template1.jpeg";
import Dropdown from "./components/Dropdown.js";
import CategoryDropdown from "./components/CategoryDropdown.jsx";
import CategoryDrawer from "./components/CategoryDrawer.jsx";
import "bulma/css/bulma.css";
import { Resizable } from "re-resizable";
import ResizableElements from "./components/ResizableElements.jsx";

export default function App() {
	const [name, setName] = useState("");
	const handleChange = (event) => {
		console.log(event.target.value);
		setName(event.target.value);
	};

	return (
		<Router>
			<Header />
			<div className="columns">
				<div className="column is-two-fifths">
					<Carousel />
				</div>
				<div className="column">
					<ResizableElements
						name={name}
						handleChange={handleChange}
					/>
					<CardTemplate name={name} />
				</div>
			</div>
		</Router>
	);
}
