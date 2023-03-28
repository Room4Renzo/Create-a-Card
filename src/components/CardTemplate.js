import "./CardTemplate.css";
import { useState } from "react";
import CarouselData from "../data/CarouselData";

const CardTemplate = (props) => {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<div className="rectangle-template">
			<img src={props.templateUrl} />
		</div>
	);
};

export default CardTemplate;
