import "./CardTemplate.css";
import { useState } from "react";

const CardTemplate = (props) => {
	return (
		<div className="rectangle">
			<img src={props.templateUrl} />
			<h2>{props.name}</h2>
		</div>
	);
};

export default CardTemplate;
