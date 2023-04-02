// import ResizableElements from "./components/ResizableElements.jsx";
// import { Resizable } from "re-resizable";
import { useState } from "react";
import "./Home.css";

import TemplateCarousel from "../TemplateCarousel/TemplateCarousel";
import Carousel from "../Carousel/Carousel";

import CardTemplate from "../CardTemplate/CardTemplate";
import ResizeImage from "../ResizeImage/ResizeImage";
import DownloadButton from "../DownloadButton/DownloadButton";
// import "bulma/css/bulma.css";
import TemplateData from "../../data/TemplateData";
import CarouselData from "../../data/CarouselData";
import ColorPicker from "../ColorPicker/ColorPicker";
import TextInput from "../TextInput/TextInput";
import FontPicker from "../FontChange/FontPicker";

const Home = () => {
	// const [name, setName] = useState("");
	const [message, setMessage] = useState("");

	// const handleChange = (event) => {
	//   console.log(event.target.value);
	//   setName(event.target.value);
	//   setMessage(event.target.value);
	// };

	const [image, setImageUrl] = useState(
		CarouselData[Math.floor(Math.random() * CarouselData.length)].picture[0]
	);
	const [template, setTemplateUrl] = useState(
		TemplateData[Math.floor(Math.random() * TemplateData.length)]
	);

	const [textColor, setTextColor] = useState("black");
	const [textFont, setTextFont] = useState("Arial");
	console.log("text font on change", textFont);

	return (
		<div className="container is-fluid">
			<div className="columns is-vcentered">
				<div className="column is-5">
					<h1 className="category">Template</h1>
					<TemplateCarousel
						onClickTemplate={(template) => setTemplateUrl(template)}
					/>
					<h1 className="category">Image</h1>
					<Carousel onClickImage={(image) => setImageUrl(image)} />
					<div>
						<h1 className="category card is-shadowless">Message</h1>
						<TextInput onTextChange={(message) => setMessage(message)} />
					</div>
					<div>
						<h1 className="category card is-shadowless">Fonts</h1>
						<FontPicker onFontChange={(font) => setTextFont(font)} />
					</div>
					<div>
						<h1 className="category card is-shadowless">Colors</h1>
						<ColorPicker onChange={(color) => setTextColor(color)} />
					</div>
				</div>
				<div className="column is-6">
					<h1 className="category">Design</h1>
					<div className="card-to-display">
						<CardTemplate
							templateUrl={template}
							message={message}
							font={textFont}
							color={textColor}
						/>
						<ResizeImage image={image} />
						<DownloadButton />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
