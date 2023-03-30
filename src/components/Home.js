// import ResizableElements from "./components/ResizableElements.jsx";
// import { Resizable } from "re-resizable";
import { useState } from "react";
import "./Home.css";
import TemplateCarousel from "./TemplateCarousel";
import Carousel from "./Carousel";
import CardTemplate from "./CardTemplate";
import DownloadButton from "./DownloadButton";
import "bulma/css/bulma.css";
import FontDropdown from "./FontDropdown";
import CategoryDropdown from "./CategoryDropdown.jsx";
import { identifier } from "@babel/types";
import ResizeImage from "./ResizeImage";
import TextInput from "./TextInput";

const Home = () => {
	const [name, setName] = useState("");
	const [image, setImageUrl] = useState();
	const [template, setTemplateUrl] = useState();

	const handleChange = (event) => {
		console.log(event.target.value);
		setName(event.target.value);
	};

	return (
		<div className="container is-fluid">
			<div className="columns is-vcentered">
				<div className="column is-3">
					<h1 className="title">Templates</h1>
					<TemplateCarousel
						onClickTemplate={(template) => setTemplateUrl(template)}
					/>
				</div>
				<div className="column is-6">
					<h1 className="title">Card</h1>
					<CardTemplate templateUrl={template} />
					<ResizeImage image={image} />
					<TextInput
						name="name"
						handleChange={handleChange}
					/>
					<FontDropdown />
				</div>
				<div className="column is-3">
					<h1 className="title">Images</h1>
					<Carousel onClickImage={(image) => setImageUrl(image)} />
				</div>
			</div>
		</div>
	);
};

export default Home;
