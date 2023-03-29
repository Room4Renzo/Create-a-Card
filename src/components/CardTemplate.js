import "./CardTemplate.css";
import { useState } from "react";
import TemplateData from "../data/TemplateData";

const CardTemplate = (props) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const currentImage = TemplateData[activeIndex];
	const [clicked, setClicked] = useState(false);
	const [uploadImage, setUploadImage] = useState("");

	return (
		<div className="rectangle">
			<h1>{props.name}</h1>
		</div>
	);
};

export default CardTemplate;
