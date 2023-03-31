import "./CardTemplate.css";

const CardTemplate = (props) => {
	return (
		<div className = "head-text rectangle-template">
        <div className = "head-image">
		<img src={props.templateUrl} />
        </div>
          <div class='text-on-image' style={{ color: props.color }}>
             <h3> {props.message} </h3>
          </div>
		  </div>

	);
};

export default CardTemplate;
