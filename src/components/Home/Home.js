import { useState } from "react";
import "./Home.css";

import TemplateCarousel from "../TemplateCarousel/TemplateCarousel";
import Carousel from "../Carousel/Carousel";
import CardTemplate from "../CardTemplate/CardTemplate";
import ResizeImage from "../ResizeImage/ResizeImage";
import DownloadButton from "../DownloadButton/DownloadButton";
import FontDropdown from "../FontChange/FontDropdown";
import CategoryDropdown from "../FontChange/CategoryDropdown";
import { identifier } from "@babel/types";
import TemplateData from "../../data/TemplateData";
import CarouselData from "../../data/CarouselData";
import ColorPicker from "../ColorPicker/ColorPicker";
import TextInput from "../TextInput/TextInput";

const Home = () => {
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");

	const handleChange = (event) => {
		console.log(event.target.value);
		setName(event.target.value);
		setMessage(event.target.value);
	};

	const [image, setImageUrl] = useState(
		CarouselData[Math.floor(Math.random() * CarouselData.length)].picture[0]
	);
	const [template, setTemplateUrl] = useState(
		TemplateData[Math.floor(Math.random() * TemplateData.length)]
	);

	const [textColor, setTextColor] = useState();
	console.log("TextColor", textColor);

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
				</div>

				<div className="column is-2 middle">
					<div className="card is-shadowless">
						<div className="content">
							<div>
								<h1 className="category">Message</h1>
								<TextInput
									onCard={(message) => setMessage(message)}
									color={textColor}
								/>
							</div>
						</div>
					</div>

					<div className="card is is-shadowless">
						<div className="content">
							<div>
								<h1 className="category">Fonts</h1>
							</div>
						</div>
					</div>

					<div className="is-shadowless">
						<div className="content">
							<div>
								<h1 className="category">Colors</h1>
								<ColorPicker
									setTextColor={(textColor) => setTextColor(textColor)}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="column is-6">
					<h1 className="category">Design</h1>
					<div className="card-to-display">
						<CardTemplate
							templateUrl={template}
							message={message}
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
