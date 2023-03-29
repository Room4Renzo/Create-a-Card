import "./CardTemplate.css";

const CardTemplate = (props) => {
	return (
		<div className="rectangle-template">
			<img src={props.templateUrl} />
		</div>
	);
};

export default CardTemplate;
