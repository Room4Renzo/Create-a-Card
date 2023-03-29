import ResizableElements from "./components/ResizableElements.jsx";
import { Resizable } from "re-resizable";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Carousel from "./components/CarouselTest";
import Header from "./components/Header";
import CardTemplate from "./components/CardTemplate";
import ResizeImage from "./components/ResizeImage";
import DownloadButton from "./components/DownloadButton";
import "bulma/css/bulma.css";
import TemplateCarousel from "./components/TemplateCarousel.js";
import FontDropdown from "./components/FontDropdown";
import TextWrapper from "./components/ResizableElements.jsx";
import CategoryDropdown from "./components/CategoryDropdown.jsx";
import { identifier } from "@babel/types";
import TemplateData from "./data/TemplateData";

export default function App() {
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");

	const handleChange = (event) => {
		console.log(event.target.value);
		setName(event.target.value);
		setMessage(event.target.value);
	};

	const [image, setImageUrl] = useState();
	const [template, setTemplateUrl] = useState();

	return (
		<Router>
			<Header />
			<div className="container is-fluid">
				<div className="columns">
					<div className="column is-5">
						<h1 className="title">Create your own card</h1>
						<TemplateCarousel
							onClickTemplate={(template) => setTemplateUrl(template)}
						/>
						<Carousel onClickImage={(image) => setImageUrl(image)} />
						<h2>pick a font</h2>
						<FontDropdown />
					</div>
					<div className="column is-2">
						<div className="card">
									<figure className="image">
										<img
											src={require("./assets/images/Navigation/PointLeft.png")}
										/>
									</figure>
								<div className="content">Pick an image here.</div>
						</div>

						<div className="card">
									<figure className="image">
										<img
											src={require("./assets/images/Navigation/PointRight.png")}
										/>
									</figure>
							<div className="content">Design your card here.</div>
						</div>

						<div className="card">
									<figure className="image">
										<img
											src={require("./assets/images/Navigation/PointDown.png")}
										/>
									</figure>
								</div>
							</div>
							<TextWrapper
								name={name}
								handleChange={handleChange}
							/>
							<ResizableElements />
							<CategoryDropdown />
						</div>
					</div>
					<div className="column is-6">
						<h1>Your card</h1>
						<CardTemplate
							templateUrl={template}
							name={name}
							message={message}
							handleChange={handleChange}
						/>
						<ResizeImage image={image} />
						<DownloadButton />
			</div>
		</Router>
	);
}
