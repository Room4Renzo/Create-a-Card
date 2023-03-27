import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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

export default function App() {
	return (
		<Router>
			<Header />
			<div className="columns">
				<div className="column is-two-fifths">
					<h1 className="title">Create your own card</h1>
					<Carousel />
					<h2>pick a font</h2>
					<Carousel />
				</div>
				<div className="column">
					<h1>Create a c ard</h1>
					<CardTemplate />
					<DownloadButton />
				</div>
			</div>
		</Router>
	);
}
