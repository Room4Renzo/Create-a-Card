import "./CardTemplate.css";

const CardTemplate = (props) => {
	return (
		<div className="rectangle-template">
			<img src={props.templateUrl} />
			<h3 className="text-input">{props.name}</h3>
		</div>
	);
};

export default CardTemplate;
