import "./CardTemplate.css";

const CardTemplate = (props) => {
	return (
		<div className="rectangle">
			<figure>
				<img src={props.templateUrl} />
			</figure>
		</div>
	);
};

export default CardTemplate;
