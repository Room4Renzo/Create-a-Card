import "./CardTemplate.css";

const CardTemplate = (props) => {
	return (
		<div className="head-text rectangle-template">
			<div className="head-image">
				<img src={props.templateUrl} />
			</div>
		</div>
	);
};

export default CardTemplate;
