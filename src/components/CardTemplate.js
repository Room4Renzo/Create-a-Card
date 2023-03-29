import "./CardTemplate.css";
import { useState } from "react";

const CardTemplate = (props) => {
	return (
		<div className="rectangle">
			<h1>{props.name}</h1>
		</div>
	);
};

export default CardTemplate;
