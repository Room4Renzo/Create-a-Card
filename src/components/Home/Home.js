// import ResizableElements from "./components/ResizableElements.jsx";
// import { Resizable } from "re-resizable";
import { useState } from "react";
import "./Home.css";

import TemplateCarousel from "../TemplateCarousel/TemplateCarousel";
import Carousel from "../Carousel/Carousel";

import CardTemplate from "../CardTemplate/CardTemplate";
import ResizeImage from "../ResizeImage/ResizeImage";
import ResizeText from "../ResizeText/ResizeText";
import DownloadButton from "../DownloadButton/DownloadButton";
import TemplateData from "../../data/TemplateData";
import CarouselData from "../../data/CarouselData";
import ColorPicker from "../ColorPicker/ColorPicker";
import TextInput from "../TextInput/TextInput";
import FontSizePicker from "../FontSizePicker/FontSizePicker";
import FontPicker from "../FontPIcker/FontPicker";

const Home = () => {
	const [message, setMessage] = useState("");
	const [image, setImageUrl] = useState(
		CarouselData[Math.floor(Math.random() * CarouselData.length)].picture[0]
	);
	const [template, setTemplateUrl] = useState(
		TemplateData[Math.floor(Math.random() * TemplateData.length)]
	);

	const [textColor, setTextColor] = useState();
	const [fontSize, setFontSize] = useState(14);
	const [textFont, setTextFont] = useState("Arial");

	return (
		<div className="container is-fluid">
			<div className="columns is-vcentered">
				<div className="column is-5">
					<h1 className="category">Template</h1>
					<TemplateCarousel
						className="element"
						onClickTemplate={(template) => setTemplateUrl(template)}
					/>
					<h1 className="category">Image</h1>
					<Carousel
						className="element"
						onClickImage={(image) => setImageUrl(image)}
					/>
					<div className="element">
						<h1 className="category card is-shadowless">Message</h1>
						<TextInput
							onTextChange={(message) => setMessage(message)}
							color={textColor}
						/>
					</div>
					<div className="element">
						<h1 className="category card is-shadowless">Fonts</h1>
						<FontPicker onFontChange={(font) => setTextFont(font)} />
					</div>
					<div className="element">
						<h1 className="category card is-shadowless">Font Sizes</h1>
						<FontSizePicker
							onFontSizeChange={(fontSize) => setFontSize(fontSize)}
						/>
					</div>
					<div className="element">
						<h1 className="category card is-shadowless">Colors</h1>
						<ColorPicker
							onColorChange={(textColor) => setTextColor(textColor)}
						/>
					</div>
				</div>

				<div className="column is-6">
					<h1 className="category">Design</h1>
					<div className="card-to-display">
						<CardTemplate templateUrl={template} />
						<ResizeImage image={image} />
						<ResizeText
							message={message}
							color={textColor}
							fontSize={fontSize}
							font={textFont}
						/>
						<DownloadButton />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
