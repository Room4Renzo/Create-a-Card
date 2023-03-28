import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
import { useState } from "react";

import FontDropdown from './components/FontDropdown';
import TemplateCarousel from "./components/TemplateCarousel.js";

import { Resizable } from "re-resizable";
import ResizableElements from "./components/ResizableElements.jsx";
import FontDropdown from "./components/FontDropdown";
import { Box } from "@mui/system";

export default function App() {
	const [name, setName] = useState("");
	const handleChange = (event) => {
		console.log(event.target.value);
		setName(event.target.value);
	};
	let [image, setImageUrl] = useState();
	let [template, setTemplateUrl] = useState();
	return (
		<Router>
			<Header />
			<div className="columns">
				<div className="column">
					<h1 className="title">Create your own card</h1>
					<TemplateCarousel onClickTemplate={(template) => setTemplateUrl(template)} />
					<Carousel onClickImage={(image) => setImageUrl(image)} />
					
					<h2>pick a font</h2>
					{/* <Carousel /> */}
				</div>
				<div className="column">
					<h1>Create a card</h1>
					<CardTemplate imageUrl={template} />
					<ResizeImage image={image} />
					<DownloadButton />
				</div> 
			</div>
			<div className="container is-fluid">
				<div className="columns">
					<div className="column is-5">
						<Carousel onClickImage={(abc) => setImageUrl(abc)} />
						<Carousel />
					</div>
					<div className="column is-2">
						<div className="card">
							<div className="card-content">
								<div className="media"></div>
								<div className="card-image">
									<figure className="image">
										<img src="src\assets\images\Navigation\LeftArrow.svg" />
									</figure>
								</div>
								<div className="content">Pick an image here.</div>
							</div>
						</div>

						<div className="card">
							<div className="card-content">
								<div className="media"></div>
								<div className="card-image">
									<figure className="image">
										<img src="./assets/images/Navigation/PointRight.png" />
									</figure>
								</div>
							</div>
							<div className="content">Design your card here.</div>
						</div>

						<div className="card">
							<div className="card-content">
								<div className="content">Type your text here.</div>
								<div className="media"></div>
								<div className="card-image">
									<figure className="image is-4by3">
										<img src="src\assets\images\Navigation\PointDown.png" />
									</figure>
								</div>
							</div>
							<TextInput
								name={name}
								handleChange={handleChange}
							/>
						</div>
					</div>
					<div className="column is-6">
						<CardTemplate name={name} />
					</div>
				</div>
			</div>
		</Router>
	);
}
