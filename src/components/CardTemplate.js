import "./CardTemplate.css";

const CardTemplate = (props) => {
	return (
		<div className = "head-text rectangle-template">
        <div className = "head-image">
		<img src={props.templateUrl} />
        </div>
          <div class='text-on-image' >
             <h3 style={{ fontFamily: props.font }}> {props.message} </h3>
          </div>
		  </div>

	);
};

export default CardTemplate;
