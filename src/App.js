import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { useState } from "react";
import Carousel from "./components/Carousel";
import TemplateCarousel from "./components/TemplateCarousel";
import CardTemplate from "./components/CardTemplate";
import ResizeImage from "./components/ResizeImage";
import ColorPicker from "./components/ColorPicker";
import TextInput from "./components/TextInput";
import { BrowserRouter as Router } from "react-router-dom";

import React from "react";

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
			<div>
				<Navbar />
				<Home />
			</div>
			<div className="container is-fluid">
				<div className="columns is-vcentered">
					{/* Column 1 */}
					<div className="column is-5">
						<h1 className="title">Templates</h1>
						<TemplateCarousel
							onClickTemplate={(template) => setTemplateUrl(template)}
						/>
						<h1 className="title">Images</h1>
						<Carousel onClickImage={(image) => setImageUrl(image)} />
						<div className="extras">
							<div>
								<h1 className="title">Fonts</h1>
								{/* <FontDropdown /></div> */}
							</div>
							<div>
								<h1 className="title">Colors</h1>
								<ColorPicker />
							</div>
						</div>
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
							{/* <TextInput
								name="name"
								handleChange={handleChange}
							/> */}

							{/* <ResizableElements /> */}
						</div>
					</div>
				</div>
				<div className="column is-6">
					<CardTemplate templateUrl={template} />
					<ResizeImage image={image} />
				</div>
			</div>
		</Router>
	);
}
