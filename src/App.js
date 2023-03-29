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
import ColorPicker from "./components/ColorPicker";
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
				<div className="columns is-vcentered">
					<div className="column is-5">
						{/* <h1 className="title is-size-2">Create your own card</h1> */}
						<TemplateCarousel
							onClickTemplate={(template) => setTemplateUrl(template)}
						/>
						<Carousel onClickImage={(image) => setImageUrl(image)} />
					</div>

					<div className="column is-2">
						<div className="card is-shadowless">
							<div className="content">
								<h2 className="is-size-2">← Pick an image here</h2>
							</div>
						</div>

						<div className="card is is-shadowless">
							<div className="content">
								<h2 className="is-size-2">Design your card here →</h2>
							</div>
						</div>

						<div className="card is-shadowless">
							<div className="content">
								<h2 className="is-size-2">Enter Text Here ↓</h2>
							</div>

							<TextWrapper
								name={name}
								handleChange={handleChange}
							/>

							<CategoryDropdown />
						</div>
					</div>
				</div>
			</div>
			<div className="column is-6">
				<CardTemplate
					templateUrl={template}
					name={name}
				/>

				<ResizeImage image={image} />
			</div>
		</Router>
	);
}
