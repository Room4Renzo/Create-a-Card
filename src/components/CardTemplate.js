import "./CardTemplate.css";

const CardTemplate = (props) => {
	return (
		<div className="rectangle">
			<img src={props.templateUrl} />
		</div>
	);
};

export default CardTemplate;
